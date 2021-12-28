import { useState } from 'react';
import styles from './fhby.module.css';


const Fhby = () => {
    const [isVis, setIsVis] = useState(true);
    const [isText, setIsText] = useState(true);
    const [isImgLike, setIsImgLike] = useState(true);


    const handleClick = () => {
        setIsText(false);
    }

    const handleLike = () => {
        setIsImgLike(false);
    }
    
    const handleMouse = () => {
        setIsVis(prev => !prev);
    }


    return (
        <div  className={styles.block}>
            <div onMouseEnter={handleMouse} onMouseLeave={handleMouse} className={styles.content}>
                <div className={styles.blockImg}></div>
                {isVis && <div className={styles.season}>FW 21/22</div>}
                <div className={styles.name}>Mackage</div>
                {isVis ? <div className={styles.text}>Пальто SAGE-PL</div> : 
                        <div className={styles.text}>L</div> }
                {isVis ? <div className={styles.price}>3 329,99 BYN</div> :
                        <div className={styles.hoverBlock}>
                            <button onClick={handleClick} className={styles.but}>{isText ? 'В карзину' : 'Перейти в карзину'}</button>
                            <div onClick={handleLike} className={styles.blockMiniBat}>
                                {isImgLike ? <img className={styles.fotoLike} src='https://fh.by/images/svg/unlike.svg' /> :
                                            <img className={styles.fotoLike} src='https://fh.by/images/svg/like-hover.svg' />}
                            </div>
                </div>}
            </div>
        </div>
    );
};



export default Fhby;