import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './figure.module.css';

interface FigureProps {
    type?: 'round' | 'rectangle' | 'square';
    size?: 'small' | 'medium' | 'large';
    background?: string;
}

const Figure = ({ type = 'round', size = 'medium', background = 'red' }: FigureProps) => {
    const [isVis, setIsVis] = useState(true);

    const handleClick = () => {
        setIsVis(prev => !prev);
    }

    return (
        <div onClick={handleClick} className={clsx(styles.figure, styles[type], styles[size], !isVis && styles.unVisible)} style={{ background }} />
    );
};



export default Figure;