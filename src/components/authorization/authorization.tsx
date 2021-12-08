import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './authorization.module.css';


const Authorization = () => {
    
    const [valText, setValText] = useState('');
    const [valPassword, setValPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isHelp, setIsHelp] = useState(false);
    const [isTodo, setIsTodo] = useState(false);

    const handleEmail = (e: any) => {
        setValText(e.target.value); 
    };

    const handleLogin = (e: any) => {
        setValPassword(e.target.value); 
    };

    const handlecheckbox = () => {
        setIsChecked(prev => !prev);
    };

    const handlecheckboxVision = () => {
        setIsChecked2(prev => !prev);
    };

    const handleBtn = (e: any) => {
        e.preventDefault();
        if(valText === 'sdfgsb@mail.ru' && valPassword === '34634683') {
            window.open('https://www.google.com/', '_blank')
        } else {
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
                setIsHelp(true);
            },4000)
            
        }
    };

    const handleHelp = (e: any) => {
        e.preventDefault();
        setIsTodo(prev=>!prev);
    }
        

    return (
        <div className={styles.block}>
            <form className={styles.formes}>
                <input type='text' onChange={handleEmail} className={styles.inputs} value={valText} />
                <div className={styles.vision}>
                    <input  type={!isChecked2 ? 'password' : 'text'} onChange={handleLogin} className={styles.inputs} value={valPassword} />
                    <input type='checkbox' onChange={handlecheckboxVision} className={styles.inputsCheckbox} checked={isChecked2} />
                </div>
                <div className={styles.blockCheck}>
                    <input type='checkbox' onChange={handlecheckbox} className={styles.inputsCheckbox} checked={isChecked} />
                    <span className={styles.content}> Вам есть 18 лет? </span>
                </div>
                <div className={styles.footerText}>
                    {isError && <div className={styles.error}> Ошибка авторизации </div>}            
                    {isHelp && <button onClick={handleHelp} 
                                       className={styles.errorBtn}>{!isTodo ? 'Показать возможные ошибки' : 'Скрыть список'}</button>}
                    {isTodo && <div className={styles.TD}>
                                    <ol>
                                        <li>Неверный логин</li>
                                        <li>Неверный пароль</li>
                                        <li>Поля формы не заполнены</li>
                                    </ol>
                               </div>}
                    <button onClick={handleBtn} className={styles.btn} disabled={!isChecked} > Войти </button>
                </div>
                {isError && <img className={styles.foto} src='https://www.kino-teatr.ru/blog/331/9227.jpg'/>}
            </form>
        </div>
    );
};

export default Authorization;