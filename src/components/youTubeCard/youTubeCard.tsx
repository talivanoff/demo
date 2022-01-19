import React from 'react';
import {useState} from 'react';
import styles from './youTubeCard.module.css';
import clsx from 'clsx';


const YouTubeCard = () => {

    const [isVisBut, setIsVisBut] = useState(false);
    const [isVisList, setIsVisList] = useState(false);

    const handleMouseEnter = () => {
        setIsVisBut(true);
    }

    const handleMouseLeave = () => {
        setIsVisBut(false);
    }

    const handleClickIcon = () => {
        setIsVisList(prev=>!prev);
    }

    const handleMouseLeaveList = () => {
        setIsVisList(false);
    }

    return (
        <div className={styles.main} onMouseLeave={handleMouseLeave}>
            <div className={clsx(styles.card, isVisBut && styles.cardHover)}>
                <img onMouseEnter={handleMouseEnter} className={styles.imagesBig} src='https://www.fonstola.ru/download.php?file=201111/1680x1050/fonstola.ru-60644.jpg'/>
                <div className={styles.content}>
                    <img className={styles.imagesSmoll} src='https://www.fonstola.ru/download.php?file=201111/1680x1050/fonstola.ru-60644.jpg'/>
                    <div className={styles.title}>Замок царя Соломона</div>
                    <img onClick={handleClickIcon} className={styles.iсon} src='https://cdn.imgbin.com/7/12/3/imgbin-hamburger-button-kebab-computer-icons-icon-design-others-4WE19ch1hhV4H3eqr8aUsDnJw.jpg'/>
                </div>
                <div className={styles.bottomText}>
                    <div className={styles.text}>Замок</div>
                    <div className={styles.text}>23899 просмотров</div>
                    <div className={styles.text}>1 месяц назад</div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.butBlock}>
                        <img className={styles.iсonBut} src='https://avatars.mds.yandex.net/i?id=9428a8a5062756e3c55b0249025291da-5611576-images-thumbs&n=13&exp=1'/>
                        <div className={styles.textBut}>Смотреть позже</div>
                    </div>
                    <div className={styles.butBlock}>
                        <img className={styles.iсonBut} src='https://w7.pngwing.com/pngs/885/690/png-transparent-computer-icons-zip-document-file-cdr-angle-image-file-formats.png'/>
                        <div className={styles.textBut}>Добавить в очередь</div>
                    </div>
                </div>
            </div>
            {isVisList && <div className={clsx(styles.list, isVisBut && styles.listHover)} onMouseLeave={handleMouseLeaveList}> 
                    <div className={styles.spanText}>vedbhrhfrbthbo</div>
                    <div className={styles.spanText}>vohik87k78k8787bvtjvb</div>
                    <div className={styles.spanText}>vedbhobthbvtjvb</div>
                    <div className={styles.spanText}>vedbhrhfrbovb</div>
                    <div className={styles.spanText}>vobhrhfrbthbvtjvb</div>
                    <div className={styles.spanText}>obhrhfrbthbvtjvb</div>
                </div>}
        </div>
    )
};

export default YouTubeCard;