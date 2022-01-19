import React from 'react';
import styles from './blockFigures.module.css';
import Figure from '../figure';


const BlockFigures = () => {

    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <Figure shapeFigure='square' backgroundColor='green' sizes='2' />
                <Figure shapeFigure='circle' backgroundColor='red' sizes='3' />
                <Figure shapeFigure='rectangle' backgroundColor='blue' sizes='1' />
            </div>
        </div>
    );
};

export default BlockFigures;