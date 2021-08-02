import { useState } from 'react';
import styles from './inBut.module.css';

interface PropsArg {
    pushing: (value: string) => void;
}

 
 const InBut = ({ pushing }: PropsArg) => {
    const [value2, setValue2] = useState(''); 
    
    const handleChange = (e: any) => {
       setValue2(e.target.value);
    }

    const handle = () => {
        if (value2 !== '') {
            pushing(value2);
            setValue2(''); 
        }
                  
    }

    return (
       
           
           <div className={styles.form}>
               <input className={styles.inp} placeholder='Введите текст' onChange={handleChange} value={value2}/>
               <button className={styles.btn} onClick={handle}>+</button>
           </div>
    )
 }

export default InBut;
