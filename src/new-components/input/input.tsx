import { useState } from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

const isNumber = (str: string) => str.match(/^\d+$/);
 
interface PropsInput {
    onChange: (count: number) => void;
}

const Input = ({onChange}: PropsInput) => {
    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e: any) => {
        setValue(e.target.value)
        
        if (isNumber(e.target.value) || e.target.value === '') {
            setIsError(false)
            onChange(+e.target.value || 0)
        } else {
            setIsError(true)
            onChange(0)
        }
    }

    return (
        <input className={clsx(styles.input, isError && styles.error)} onChange={handleChange} value={value}/>
    )
    

} 
   

export default Input;