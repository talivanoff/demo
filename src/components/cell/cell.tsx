import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './cell.module.css';


interface CellProps {
    items: { 
     title: string,
     cells: string,
    }
    num: number;
    val: number;
    handleCell: (num: number) => void;
  }


const Cell = ({items, num, handleCell, val}: CellProps) => {
    const {title, cells} = items;
    const handleClickCell = () => {
        handleCell(num);   
    }
    
    

    return (
        <div onClick={handleClickCell} className={clsx(styles.cell, cells, val !== num && styles.cellBack)}>
            {title}
        </div>
    );
};

export default Cell;