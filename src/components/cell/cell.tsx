import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './cell.module.css';


interface CellProps {
    names: string;
    num: number;
    isVal: boolean;
    buttonClicks: ()=>void;
}

const Cell = ({names, num, isVal}: CellProps) => {
    
    
    
    

    return (
        <div  className={clsx(styles.cell, isVal && styles.cellBack)}>
            {names + num}
        </div>
    );
};

export default Cell;