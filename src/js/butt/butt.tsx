import { useState } from 'react';
import styles from './butt.module.css';


interface PropsButt {
    name: string;
    navigetion: () => void;
}


const Butt = ({name, navigetion}: PropsButt) => {
   const handleClick = () => {
       navigetion();
   }
   
    return( 
        <button onClick={handleClick} className={styles.but}> {name} </button>     
    )
}

export default Butt;