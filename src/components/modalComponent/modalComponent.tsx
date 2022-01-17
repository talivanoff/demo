import { useState } from 'react';
import styles from './modalComponent.module.css';
import ModalWindow from '../modalWindow';
import React from 'react';

const ModalComponent = () => {
    
    const defaultData = {town: '', house: '', name: '', tel: ''};
    const [isVisModal, setIsVisModal] = useState(false);
    const [isFinish, setIsFinish] = useState(false); 
    const [isDataFilled, setIsDataFilled] = useState(false);
    const [data, setData] = useState(defaultData);
    const {town, house, name, tel} = data;
    
    const getData = (town: string, house: string, name: string, tel: string) => {
        setData({
            town,
            house,
            name,
            tel
        });
        modalCloseAndTwoBat();
    };
    
    const handleClick = () => {
        setIsVisModal(true);

        const body = document.body;
        body.style.overflow = 'hidden';
    }

    const modalClose = () => {
        setIsVisModal(false);

        const body = document.body;
        body.style.overflow = 'scroll';
    }

    const modalCloseAndTwoBat = () => {
        setIsVisModal(false);


        const body = document.body;
        body.style.overflow = 'scroll';

        setIsDataFilled(true);
    }

    const handleClickOrder = () => {
        setData(defaultData);
        setIsDataFilled(false);
        setIsFinish(true);
        setTimeout(() => {
            setIsFinish(false);
        }, 4000);
    }

    return (
        <div className={styles.wind}>
            <div className={styles.banner}>
                <div className={styles.title}>Данные о доставке</div>
                <div className={styles.blockDate}>
                    <div className={styles.blockInputs}>
                        <div className={styles.text}>Город: </div>
                        <div className={styles.text}>{town}</div>
                    </div>
                    <div className={styles.blockInputs}>
                        <div className={styles.text}>Адрес: </div>
                        <div className={styles.text}>{house}</div>
                    </div>
                    <div className={styles.blockInputs}>
                        <div className={styles.text}>Фамилия и имя: </div>
                        <div className={styles.text}>{name}</div>
                    </div>
                    <div className={styles.blockInputs}>
                        <div className={styles.text}>Телефон: </div>
                        <div className={styles.text}>{tel}</div>    
                    </div>
                </div>
                <div className={styles.btnBlock}>   
                    {!isDataFilled ? <button onClick={handleClick} className={styles.btn}>Ввести данные</button> :
                     <>
                        <button onClick={handleClick} className={styles.btn}>Изменить данные</button>
                        <button onClick={handleClickOrder} className={styles.btn}>Заказать доставку</button>
                     </>
                    }
                </div>
                {isFinish && <div className={styles.finish}>
                    Спасибо за заказ. Ожидайте доставку    
                </div>}
            </div>
            {isVisModal && <ModalWindow setIsVis={modalClose}
                                        dataBanner={data}  
                                        getData={getData} 
                                        />}
        </div>
    )
};

export default ModalComponent;