import { SyntheticEvent, useState} from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './humansCash.module.css';
import HumansCard from '../humansCard';


const HumansCash = () => {

    const handleBtn = () => {
            window.open('https://www.google.com/', '_blank')
    }
    
    return (
        <div className={styles.wind}>
            <div className={styles.block}>
                <HumansCard title="0 UZS" >
                    <div className={styles.childs}>
                        <div className={styles.imgText}>
                            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
                            <div>Годовое обслуживание</div>
                        </div>
                        <div className={styles.imgText}>
                            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
                            <div>SMS-информирование</div>
                        </div>
                        <div className={styles.imgText}>
                            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
                            <div>Выпуск карты</div>
                        </div>
                        <div className={styles.imgText}>
                            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
                            <div>Минимальный депозит</div>
                        </div>
                    </div>
                </HumansCard>
                <HumansCard title="0 %">
                    <div className={styles.childs}>
                        <div className={styles.imgText}>
                            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
                            <div>Пополнение с любой другой карты</div>
                        </div>
                        <div className={styles.imgText}>
                            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
                            <div>Перевод с карты Humans на карту Humans</div>
                        </div>
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