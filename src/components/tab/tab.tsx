import { SyntheticEvent, useState} from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './tab.module.css';

interface PropsCard {
   item: { 
    name: string;
    src: string;
    lang: string;
   }
   handleLang1: (langs: string) => void;
 }

const Tab = ({item, handleLang1}: PropsCard) => {
    const {name, src, lang} = item;
    
    const handleTab = () => {
        handleLang1(lang);
    }
    
    return (
        <div onClick={handleTab}  className={clsx(styles.fotoRep, lang === 'ru' && styles.fotoRepColor)}>
            <img className={styles.foto} src={src}/>
            <span className={styles.rep}>{name}</span>
        </div>
            
    );
};

export default Tab;