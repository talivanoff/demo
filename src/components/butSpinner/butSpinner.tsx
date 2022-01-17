import React from 'react';
import { useState} from 'react';
import styles from './butSpinner.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import clsx from 'clsx';

interface ButProps {
    isDisable: boolean;
    buttonEnter: () => void; 
}

const ButSpinner = ({isDisable, buttonEnter}: ButProps) => {

    const [isLoader, setIsLoader] = useState(false);

    const handleClickEnter = () => {
        setIsLoader(true);
        setTimeout(() => {
            buttonEnter();
            setIsLoader(false);
        }, 2000);
    }

    return (
        <button onClick={handleClickEnter} className={clsx(styles.btn, !isDisable && styles.btnDis)} disabled = {isDisable}>
            {isLoader && <Loader type="Audio" color="#FFF" height={25} width={25} />}
            <span>Подтвердить</span>
        </button>
    )
};

export default ButSpinner;