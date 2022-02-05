import { useEffect, useState } from 'react';
import styles from './compCalcCash.module.css';
import React from 'react';


interface MasProps {
    urlIcon: string;
    urlOk: string;
    nameIcon: string;
    index: number;
    changeFlags: (counter: boolean, index: number) => void;
}



const CompCalcCash = ({urlIcon, urlOk, nameIcon, index, changeFlags}: MasProps) => {
   
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClickIcon = () => {
        setIsVisible(prev => {
            changeFlags(!prev, index);
            return !prev;
        });  
    }

    return (
        <div className={styles.iconsBlock}>
            <img onClick={handleClickIcon} className={styles.icon} src={urlIcon} alt='foto'/>
            <div className={styles.iconName}>
                {nameIcon}
            </div>
            {isVisible && <img className={styles.iconOk} src={urlOk} alt='foto'/>}
        </div>
    );
};

export default CompCalcCash;   