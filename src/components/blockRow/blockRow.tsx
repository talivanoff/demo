import styles from './blockRow.module.css';
import CompCalcCash from '../compCalсCash';
import React, { useEffect, useMemo, useState } from 'react';


interface PropsMasIcons {
  urlIcon: string;
  urlOk: string;
  nameIcon: string;
}

interface PropsBlockRow {
  title: string;
  coefSum: number;
  masIcons: PropsMasIcons[];
  changeSumBlock: (sum: number, index: number) => void;
  index: number;
}

const BlockRow = ({title, coefSum, masIcons, changeSumBlock, index}: PropsBlockRow) => {
    const [masIconsFlag, setMasIconsFlag] = useState(Array(masIcons.length));
    const changeFlags = (flag: boolean, index: number) => {
      setMasIconsFlag(prev => {
        const masIconsFlagCopy = [...prev];
        masIconsFlagCopy[index] = flag;
        return masIconsFlagCopy; 
      });
    }

    const counter = useMemo(()=> masIconsFlag.filter(Boolean).length, [masIconsFlag]);
    const sumBlock = useMemo(()=>coefSum * counter, [counter, coefSum]);

    useEffect(()=> {
      changeSumBlock(sumBlock, index);
    },[sumBlock])

    
    return (
      <div className={styles.masContent}>
        <div className={styles.names}>
              <div className={styles.title}>
                  {title}
              </div>
              <div className={styles.calcText}>
                  {sumBlock} UZS за {counter} приложений
              </div>
        </div>
        <div className={styles.iconsContent}>
          {masIcons.map((item, ind) => 
              <CompCalcCash key={item.urlIcon} changeFlags={changeFlags} {...item} index={ind} />                      
          )}
        </div>
      </div>
    )
};

export default BlockRow; 


