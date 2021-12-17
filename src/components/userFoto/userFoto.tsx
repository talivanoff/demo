import { SyntheticEvent, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './userFoto.module.css';



const UserFoto = () => {
    

    
    const [mas, setMas] = useState([]);
    const [masInp, setMasInp] = useState(mas);
    const [val, setVal] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isClickBtn, setIsClickBtn] = useState(true);


 useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then((data) => data.json())
            .then((result) => {
                setMas(
                    result.data.map((item: {email: string, first_name: string, avatar: string}) => item).slice(0, 6)
                )
                setMasInp(result.data.map((item: {email: string, first_name: string, avatar: string}) => item).slice(0, 6));
                 } )
            
    }, []);
 
    const handleBlocks = (i: number) => {
        setMas(mas.filter((item, index: number) => i !== index && item ));
        setMasInp(masInp.filter((item, index: number) => i !== index && item ));
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        },3000)  
    }

    const handleDelete = (i: number) => {
        handleBlocks(i);
        setIsClickBtn(true);
    }

    const handleAdd = (i: number) => {
        handleBlocks(i);
        setIsClickBtn(false);
    }

    useEffect(() => {
        if(!mas.length) {
            setIsVisible2(true);
        } else {
            setIsVisible2(false);
        }
    }, [mas])
    

    const handleChange = (e: any) => {
        setVal(e.target.value);
        if (e.target.value === '') {
            setMas(masInp);
            return;
        }
        setMas(
            masInp.filter(
                (item: { first_name: string }) =>
                    item.first_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            )
        );
        
        
    }

    return (
        <div className={styles.block}>
            <div className={styles.visidleBlock}>
                 {isVisible && <div className={styles.visidleBlock}>
                      {isClickBtn ? <div className={styles.textRed}>User deleted</div> : <div className={styles.textGreen}>User added to favorites </div>}
                 </div>}
            </div>
            <div className={styles.blockInput}>
                    <input className={styles.Inp} onChange={handleChange} value={val} placeholder='inter a name'/> 
                    {isVisible2 && <div className={styles.textRed}>There is no user with this name</div>}                          
            </div>
            <div className={styles.contUser}>
                 {mas.map((item: {email: string, first_name: string, avatar: string}, i: number) => 
                                      <div key={item.email} className={styles.userInfo}>
                                          <div className={styles.name}>
                                               {item.first_name}
                                          </div>
                                          <div className={styles.email}>
                                               {item.email}
                                          </div>
                                          <img className={styles.foto} src={item.avatar} />
                                          <div className={styles.btn}>
                                               <button onClick={() => handleDelete(i)} className={styles.but}>Delete</button>
                                               <button onClick={() => handleAdd(i)} className={clsx(styles.but, styles.butBack)}>Add</button>
                                          </div>
                                      </div>)}
            </div>
                
        </div>
    );
};

export default UserFoto;