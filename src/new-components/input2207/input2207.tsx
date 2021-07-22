import { useState } from 'react';
import clsx from 'clsx';
import styles from './input2207.module.css';

import search from '../../icons/search.svg'
import { useRef, useEffect } from 'react';

const isNum = (str: string) => str.match(/^\d+$/);
 
interface PropsInput {
    isIcon?: boolean;
    isNumber?: boolean;
    getValue?: (value: string) => void;
}

const Input2207 = ({isIcon, getValue, isNumber}: PropsInput) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleChange = (event: any) => {

        if (isNumber && isNum(event.target.value)) {
            setValue(event.target.value);
        } 
        
        if (!isNumber) {
            setValue(event.target.value);
        }

        if (event.target.value.length > 5) {
            alert('ERROR');
        }
    }

    const setFocus = () => {
        if (inputRef?.current) {
            inputRef.current.focus();
        }
    }

    const handleClick = () => {
        if (getValue) {
            getValue(value);
            setValue('');
        }

        setFocus();
    }

    const dis = (e: any) => {
       e.preventDefault();
    }

    useEffect(() => {
        setFocus();
    }, []);


    return (
           <div className={styles.block}>
                <input onPaste={dis} ref={inputRef} className={styles.input} onChange={handleChange} value={value}/>
                {isIcon && value.length > 1 && <img onClick={handleClick} className={styles.icons} src={search} alt='error' />}
           </div>
    )
    

} 
   

export default Input2207;
