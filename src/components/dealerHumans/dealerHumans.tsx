import { SyntheticEvent, useState } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './dealerHumans.module.css';
import ApplicationInfo from '../applicationInfo';


const DealerHumans = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    
    const handleClick = () => {
        setIsVisible(prev => !prev);
    }


    return (
        <div className={styles.root}>
            <div className={styles.block}>
                <div>
                    <div className={styles.title}>Как стать нашим дилером</div>
                    <div className={styles.text}>Давайте делать невозможное вместе!</div>  
                </div>
                <div onClick={handleClick} className={clsx(styles.btn, isVisible && styles.btnClick)}>
                    <div className={clsx(styles.textBtn, isVisible && styles.textBtnClick)} >Подробнее</div>
                    <svg className={clsx(styles.arrow, isVisible && styles.arrowClick)} width="9" height="6" viewBox="0 0 9 6" stroke="black" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L4.5 4.5L8 1"  strokeWidth="2"/>
                    </svg>
                </div>
                <img className={styles.picture} src='https://humans.uz/static/af10edcb0a129003e796747c9509483a/4cb83/feature-1.webp' />
            </div>
            {!isVisible && <div className={styles.blackBlock}></div>}
            {isVisible &&<div className={styles.hiddenBlock}>
                <div className={styles.textLink}>
                     Просто пришлите заявку на электронный адрес
                     <a href='sabdalov@humans.net'> sabdalov@humans.net</a> со следующей информацией:
                </div>
                <ApplicationInfo num='1' text='Фотографии точки продажи, где виден фасад и интерьер'/>
                <ApplicationInfo num='2' text='Описание местоположения точки продажи'/>
                <ApplicationInfo num='3' text='Копии документа, подтверждающие владение недвижимостью или договора аренды'/>
                <ApplicationInfo num='4' text='Копия свидетельства о регистрации Гувохнома'/>
                <ApplicationInfo num='5' text='Копия устава'/>
                <ApplicationInfo num='6' text='Копия паспорта директора'/>
                <ApplicationInfo num='7' text='Ваше имя, название организации, сфера деятельности, телефон'/>
            </div>}
            
        </div>
    );
};

export default DealerHumans;