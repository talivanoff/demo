import clsx from 'clsx';
import styles from './button.module.css';
import React, { useState } from 'react';


interface PropsButton {
    col: string;
    wid: number;
    heig: number;
    text: string;
    isHover?: boolean;
    onCli: () => void;
    
}


const Button = ({col, wid, heig, text, isHover, onCli}: PropsButton) => {
    const [isDis, setIsDis] = useState(false);
    const onClirr = () => {
        setIsDis(true);
        onCli();
    }
    return(
         <button onClick={onClirr}
                 disabled={isDis}
                 className={clsx(styles.button, !isDis && isHover && styles.shadow)} 
                 style={{ background: col, width: wid, height: heig}} >{text}</button> 
    )

} 

export default Button;