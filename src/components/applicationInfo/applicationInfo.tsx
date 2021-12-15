import { SyntheticEvent, useState} from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './applicationInfo.module.css';

interface applicationInfoProps {
    text: string;
    num: string;
}

const ApplicationInfo = ({text, num}: applicationInfoProps) => {
    
    return (
        <div className={styles.applic}>
            <div className={styles.blockNum}><span className={styles.num}>{num}</span></div>
            <div className={styles.applicText}>{text}</div>
        </div>
    );
};

export default ApplicationInfo;