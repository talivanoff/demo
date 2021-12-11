import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './grids.module.css';
// import Cell from '../cell';


const Grids = () => {

//  const mas = ['Вкладка', 'Вкладка', 'Вкладка']
 const [isVal1, setIsVal1] = useState(true);
 const [isVal2, setIsVal2] = useState(false);
 const [isVal3, setIsVal3] = useState(false);
 const [val, setVal] = useState(1);


const handleClick1 = (e: any) => {
    setIsVal1(true);
    setIsVal2(false);
    setIsVal3(false);
    setVal(1);
}

const handleClick2 = (e: any) => {
    setIsVal2(true);
    setIsVal1(false);
    setIsVal3(false);
    setVal(2);
}

const handleClick3 = (e: any) => {
    setIsVal3(true);
    setIsVal2(false);
    setIsVal1(false);
    setVal(3);
}

    return (
        <div className={styles.content}>
             <div className={styles.block}>
                <div onClick={handleClick1} className={clsx(styles.cell, styles.cell1, !isVal1 && styles.cellBack)}>
                    Вкладка 1
                </div>
                <div onClick={handleClick2} className={clsx(styles.cell, styles.cell2, !isVal2 && styles.cellBack)}>
                    Вкладка 2
                    </div>
                <div onClick={handleClick3} className={clsx(styles.cell, styles.cell3, !isVal3 && styles.cellBack)}>
                    Вкладка 3
                </div>
                    {/* {mas.map((item: string, index: number) => <Cell names={item} key={item} num={index+1} isVal={isVal}/>)}  */}
                <div className={styles.bigCell}>
                    Содержимое {val} ...
                </div> 
             </div>
        </div>
    );
};

export default Grids;