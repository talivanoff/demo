import { SyntheticEvent, useState } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './inputTest.module.css';

const InputTest = () => {
    const handleChange = (event: any) => {
        console.log('os')
    };

    return (
        <input
            onChange={handleChange}
            // className={clsx(styles.inp, (color || dfdf ) && styles.inp2)}
            // className={color ? styles.inp: styles.inp2}
            // className={color || dfdf && 'inp inp2' : 'inp' )}
            // placeholder="Add new todo"
            // key={item}
        />
    );
};

export default InputTest;
