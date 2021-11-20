import { useEffect, useState } from 'react';
import styles from './imgText.module.css';



const ImgText = () => {
   const [isVal, setIsVal] = useState(true);
   const [isError, setIsError] = useState(false);
   const good = JSON.parse(String(localStorage.getItem('authorization')) || '');
   const [isVal2, setIsVal2] = useState(!!good)
   const [val, setVal] = useState('')
   const [val2, setVal2] = useState('')
   
   const handleClick = () => {
        setIsVal(prev => !prev);
   }

   const handleClick2 = (e: any) => {
    e.preventDefault();

    if(val.length > 5  && val2.length > 5 ) {
        setIsVal2(prev => !prev);

        localStorage.setItem('authorization', JSON.stringify({
            login: val,
            password: val2
        }))
    } else {
        setIsError(prev => !prev);
    }
    
   }

    const handleChange = (e: any) => {
        setVal(e.target.value);
        setIsError(false);
    }

    const handleChange2 = (e: any) => {
        setVal2(e.target.value);
        setIsError(false);
    }

   
    return( 
        <div className={styles.block}> 
            {isVal2 ? (
                <div>
                    <img onClick={handleClick} className={isVal ? styles.picture : styles.picture2} 
                        src='https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg'/>
                    <p className={styles.text}>Изображение андроида:</p> 
                </div>
                ) : (
                <form className={styles.formes} onSubmit={handleClick2}> 
                    <input onChange={handleChange} placeholder='введите логин' value={val}/>
                    <input onChange={handleChange2} type="password" placeholder='введите пороль' value={val2}/>
                    <button onClick={handleClick2} className={styles.but} >Ввод</button>
                    {isError && <p>Attention! Please enter at least 5 characters.</p> }
                </form>
            )}              
        </div> 
    )
}

export default ImgText;