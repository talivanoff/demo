import React from 'react';
import Figure from '../figure';

import styles from './figures.module.css';


const Figures = () => {
    return (
        <div className={styles.block}>
            <Figure />
            <Figure type="rectangle" background='blue' size='large' />
            <Figure type="square" background="green" size='small' />
        </div>
    );
};



export default Figures;