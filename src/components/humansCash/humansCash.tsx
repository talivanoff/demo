import { SyntheticEvent, useState} from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './humansCash.module.css';
import HumansCard from '../humansCard';
import Context from '../context';

const HumansCash = () => {

    const handleBtn = () => {
            window.open('https://www.google.com/', '_blank')
    }
    
    return (
        <div className={styles.wind}>
            <div className={styles.block}>
                <HumansCard title="0 UZS" >
                    <div className={styles.childs}>
                        <Context title="Годовое обслуживание" />
                        <Context title="SMS-информирование" />
                        <Context title="Выпуск карты" /> 
                        <Context title="Минимальный депозит" />
                    </div>
                </HumansCard>
                <HumansCard title="0 %">
                    <div className={styles.childs}>
                        <Context title="Пополнение с любой другой карты" />
                        <Context title="Перевод с карты Humans на карту Humans" />
                    </div>
                    </HumansCard>
                <HumansCard title="Все услуги" >
                    <div className={styles.btn} onClick={handleBtn}>
                            <div>Подробнее</div>
                            <img src='https://humans.uz/static/resources/icons/868ce62ddb7e6e9795a1bc53bb3e0f35/arrow-right-black.svg' />    
                    </div>
                </HumansCard>
            </div>
        </div>
    );
};

export default HumansCash;