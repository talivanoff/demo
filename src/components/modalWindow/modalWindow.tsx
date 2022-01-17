import React from 'react';
import { useState, useMemo } from 'react';
import styles from './modalWindow.module.css';
import {DialogOverlay} from "@reach/dialog";
import "@reach/dialog/styles.css";
import clsx from 'clsx';
import InputMask from 'react-input-mask';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';


interface ModalProps {
    setIsVis: () => void;
    setIsVisAndTwoBat: () => void;
    getData: (valTown: string, valAddress: string, valName: string, valTel: string) => void;
    dataBanner: {
        town: string,
        house: string,
        name: string,
        tel: string      
    }; 
}

const ModalWindow = ({setIsVis,setIsVisAndTwoBat, getData, dataBanner }: ModalProps) => {

    const {town, house, name, tel} = dataBanner;
    const [valTown, setValTown] = useState(town);
    const [valAddress, setValAddress] = useState(house);
    const [valName, setValName] = useState(name);
    const [valTel, setValtel] = useState(tel);
    const [isBirdie, setIsBirdie] = useState(false);
    const [isChek, setIsChek] = useState(false);
    const [isLoader, setIsLoader] = useState(false);

    // const [isDis, setIsDis] = useState(true);

    // useEffect(()=> {
    //     if(isChek === true && valTown && valAddress && valName && valTel !== '' ) {
    //         setIsDis(false); 
    //     } else {
    //         setIsDis(true); 
    //     }
    // }, [isChek, valTown, valAddress, valName, valTel])

    const isDisable = useMemo(() => !(isChek && valTown && valAddress && valName && valTel), [isChek, valTown, valAddress, valName, valTel]);
   
    const stopCloseModal = (e: any) => {     
        e.stopPropagation()
    };
    const handleChangeTown = (e: any) => {
        setValTown(e.target.value); 
    };
    const handleChangeAddress = (e: any) => {
        setValAddress(e.target.value);
    };
    const handleChangeName = (e: any) => {
        setValName(e.target.value); 
    };
    const handleChangeTel = (e: any) => {
        setValtel(e.target.value);  
        if(!e.target.value.includes('_')) { 
            setIsBirdie(true);
        } else {
            setIsBirdie(false);
        }
    };

    const handleClickChecked = (e: any) => {
        setIsChek(prev => !prev);
    };

    const handleClickEnter = (e: any) => {
        setIsLoader(true);
        setTimeout(() => {
            getData(valTown, valAddress, valName, valTel);
            setIsVisAndTwoBat();
            setIsLoader(false);
        }, 2000);
    };

    return (
        <DialogOverlay isOpen={true} >
            <div className={styles.main} onClick={setIsVis}>
                <div className={styles.modal} onClick={stopCloseModal}>
                    <div className={styles.title}>Укажите адрес доставки</div>
                    <div className={styles.blockInp}>
                        <input onChange={handleChangeTown} className={styles.inp} placeholder='Регион доставки' value={valTown} />
                        <input onChange={handleChangeAddress} className={styles.inp} placeholder='Адрес' value={valAddress} />
                        <input onChange={handleChangeName} className={styles.inp} placeholder='Фамилия и Имя' value={valName} />
                        <div className={styles.textTel}>Телефон для связи</div>
                        <div className={styles.blockTel}>
                            <InputMask mask='+375(99) 999-99-99' placeholder='+375(__) ___-__-__' onChange={handleChangeTel} className={styles.inp} value={valTel}></InputMask>
                            {isBirdie && <img className={styles.imageBirdie} src='https://img.icons8.com/ios-glyphs/2x/checkmark.png'/>}
                        </div>  
                    </div>
                    <div className={styles.checkBoxBlock}><input onClick={handleClickChecked} className={styles.checkBox} type="checkbox" checked = {isChek} /> Я гражданин Узбекистана </div> 
                    <div className={styles.btnBlock}>   
                        <button onClick={handleClickEnter} className={clsx(styles.btn, !isDisable && styles.btnDis)} disabled = {isDisable}>
                            {isLoader && <Loader type="Audio" color="#FFF" height={25} width={25} />}
                            <span>Подтвердить</span>
                        </button>
                    </div>
                    <div className={styles.btnCloseBlock}>   
                        <button onClick={() => setIsVis()} className={styles.btnСross}>
                            <img className={styles.imagesCross} src='https://humans.uz/static/resources/icons/a23fc65931bb6350a0393f2552628794/close-round.svg'/>
                        </button>
                    </div>
                </div>
            </div>
        </DialogOverlay> 
    )
};

export default ModalWindow;