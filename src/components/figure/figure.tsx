import React from 'react';
import {useState} from 'react';
import styles from './figure.module.css';
import clsx from 'clsx';

interface FigProps {
    shapeFigure: string;
    backgroundColor: string;
    sizes: any;
}

const Figure = ({shapeFigure, backgroundColor, sizes}: FigProps) => {

    const [isdarken, setIsDarken] = useState(false);

    const handleClick = () => {
        setIsDarken(prev => !prev);
    }

    return (
        <div onClick={handleClick} className={clsx(styles.fig, shapeFigure === 'square' ? 
                                                   styles.square : shapeFigure === 'circle' ? 
                                                   styles.circle : styles.rectangle,
                                                   isdarken && styles.anim)} 
                                   style={{backgroundColor: backgroundColor,
                                           height: `${sizes*120}px`,
                                           width: shapeFigure === 'rectangle' ?
                                                  `${sizes*170}px` : `${sizes*120}px`}}>
        </div>
    )
};

export default Figure;