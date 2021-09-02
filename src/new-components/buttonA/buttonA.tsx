import styles from './buttonA.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import { join } from 'path';

interface PropsA {
    d: number;
    p: number;
    s: number;
    m: number;
}


const A = ({d, p, s, m}: PropsA) => {
   const res = () => {
      return  p * (100 - s) / 100;
   }
    
    return(
<div className={styles.form} >
    <div className={styles.block}>
        <div className = {styles.text}>
            <div>
            <span>{d} дней</span><span className={styles.sale}>-{s}%</span>
            </div>
            <div className={styles.uzs}>
            <span>{res()} UZS</span><span className={styles.oldPrase}>{p} UZS</span>
            </div>
            <h4 className={styles.min}>{m} мин</h4>
        </div>
    </div> 
</div>

    )
}

 

export default A;  