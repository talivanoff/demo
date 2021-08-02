import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import styles from './input0208.module.css';

import search from '../../icons/search.svg'
import { useRef, useEffect } from 'react';
import userEvent from '@testing-library/user-event';

interface PropsInput {
    type?: string;
    placeholder: string;
    name: string;
    onChange: (name: string, value: string) => void;
}

const Input0208 = ({onChange, name, ...props}: PropsInput) => {
    const [value, setValue] = useState('');
    const handleChange = (e: any) => {
        setValue(e.target.value);
        onChange(name, e.target.value);
    }

    return (
        <input className={styles.input} onChange={handleChange} value={value} minLength={3} name={name} {...props} />
    ) 
};
   

export default Input0208;
