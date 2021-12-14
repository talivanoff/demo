import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './grids.module.css';
import Cell from '../cell';


const Grids = () => {

 const mas = [
     {
      title: 'Вкладка 1',
      isVal: false,
      cells: styles.cell1
     },
     {
      title: 'Вкладка 2',
      isVal: true,
      cells: styles.cell2
     },
     {
      title: 'Вкладка 3',
      isVal: true,
      cells: styles.cell3
     }
 ]
 const [isValue, setIsValue] = useState(true);
 const [val, setVal] = useState(1);


const handleClick = (num: number) => {
    setIsValue(prev => !prev);
    setVal(num);
    // if(num) {
    //     setIsVal(true);
    // }
}

    return (
        <div className={styles.content}>
             <div className={styles.block}>
                {mas.map((item, i) => <Cell handleCell={handleClick} val={val} items={item} key={item.title} num={i + 1} />)}
                <div className={styles.bigCell}>
                    Содержимое {val} ...
                </div> 
             </div>
        </div>
    );
};

export default Grids;