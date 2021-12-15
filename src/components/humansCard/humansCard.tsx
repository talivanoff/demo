import { SyntheticEvent, useState} from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './humansCard.module.css';

interface CardProps {
     title: string;
     children?: any;
  }

const HumansCard = ({title, children}: CardProps) => {

 

    return (
        <div className={styles.card}>
            <div className={styles.name}>
                {title}
            </div>
            {children}
        </div>
    );
};

export default HumansCard;