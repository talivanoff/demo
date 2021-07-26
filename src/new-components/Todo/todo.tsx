import { useState } from 'react';
import clsx from 'clsx';
import styles from './todo.module.css';


 
interface PropsTodo {
  text: string;
  url: string;
  warning: string;
  isCheckbox: boolean;
  del: (index: number) => void;
  index: number;
}

const Todo = ({text, url, warning, isCheckbox, index, del}: PropsTodo) => {
    const handle = () => {
        del(index);
    }

    return (
        <div className={styles.str}>
            <div className={styles.orange}></div>
            <p className={styles.text}>{text}</p>
            {isCheckbox && <img onClick={handle} className={styles.image} src={url} alt={warning} />}
        </div>
    )
    

} 
   

export default Todo;