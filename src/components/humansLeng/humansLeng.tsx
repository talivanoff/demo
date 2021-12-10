import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './humansLeng.module.css';


const HumansLeng = () => {

  const handleScroll = (e: any) => {
    if((scrollX || scrollY) > 170) {
      setIsClose(true);
    }
  }

    const [isArrow, setIsArrow] = useState(false);
    const [isVisibleBlock, setIsVisibleBlock] = useState(false);
    const [isClose, setIsClose] = useState(false);
    
    useEffect(() => {
      const data =localStorage.getItem('Language of the site Humans');
      if(data) {
        setIsClose(true);
      }
    }, []);

    useEffect(() => {
     window.addEventListener('scroll', handleScroll);
    }, []);

    const handleBlockBtn = () => {
      setIsVisibleBlock(prev => !prev);
      setIsArrow(prev => !prev);
    }
  
    const handleClose = () => {
      setIsClose(true);
    }

    
const handleRu = () => {
      localStorage.setItem('Language of the site Humans','ru');
      setIsClose(true); 
    }

    const handleEn = () => {
      localStorage.setItem('Language of the site Humans','en');
      setIsClose(true); 
    }

    const handleUz = () => {
      localStorage.setItem('Language of the site Humans','uz');
      setIsClose(true); 
    }


    return (
        <div className={styles.block}>
            {!isClose && <div className={styles.baner}>
                <div className={styles.text}>
                    Выберите язык сайта
                </div>
                <div onClick={handleBlockBtn} className={styles.blockBtnAndFotoKrets}>
                      <div className={styles.blockBtn}>
                          <img className={styles.foto} src='https://www.gumer.info/bibliotek_Buks/Polit/Article/flag_clip_image001.gif'/>   
                          <span className={styles.rep} > Русский </span>
                          <img className={isArrow ? styles.foto2 : clsx(styles.foto2, styles.degs)} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWnajmRqXBWZqrRGVd-q0WEkKMfLayMGIKyZP__N1qq6NTwW7QHzCdrl2GPvzLiF72DQ&usqp=CAU'/>
                      </div>
                      <img onClick={handleClose} className={styles.fotoKrets} src='https://png.pngtree.com/png-vector/20190419/ourlarge/pngtree-vector-cross-icon-png-image_956622.jpg'/>
                </div>
            </div>}
            <div className={styles.textContentBlock}>
                <div className={styles.textContent}>Переводите и получайте деньги из России в Узбекистан
                                                без комиссии с кешбэком за каждый переводПереводите и
                                                получайте деньги из России в Узбекистан без комиссии
                                                с кешбэком за каждый переводПереводите и получайте
                                                деньги из России в Узбекистан без комиссии с кешбэком
                                                 за каждый переводПереводите и получайте деньги из России
                                               в Узбекистан без комиссии с кешбэком за каждый перевод 
                                                Переводите и получайте деньги из России в Узбекистан без
                                              комиссии с кешбэком за каждый переводПереводите и получайте
                                              деньги из России в Узбекистан без комиссии с кешбэком за каждый
                                               переводПереводите и получайте деньги из России в Узбекистан без
                                              комиссии с кешбэком за каждый переводПереводите и получайте
                                              деньги из России в Узбекистан без комиссии с кешбэком
                                              за каждый переводПереводите и получайте деньги из
                                               России в Узбекистан без комиссии с кешбэком за каждый
                                                переводПереводите и получайте деньги из России в Узбекистан
                                              без комиссии с кешбэком за каждый переводПереводите и 
                                                получайте деньги из России в Узбекистан без комиссии с 
                                                кешбэком за каждый переводПереводите и получайте деньги из
                                             России в Узбекистан без комиссии с кешбэком за каждый 
                                              переводПереводите и получайте деньги из России в Узбекистан
                                            без комиссии с кешбэком за каждый переводПереводите и 
                                              получайте деньги из России в Узбекистан без комиссии с кешбэком
                                              за каждый переводПереводите и получайте деньги из России в Узбекистан
                                            без комиссии с кешбэком за каждый переводПереводите и
                                               получайте деньги из России в Узбекистан без комиссии
                                              с кешбэком за каждый переводПереводите и получайте деньги
                                               из России в Узбекистан без комиссии с кешбэком за
                                               каждый переводПереводите и получайте деньги из
                                              России в Узбекистан без комиссии с кешбэком за
                                              каждый переводПереводите и получайте деньги из России
                                              в Узбекистан без комиссии с кешбэком за каждый переводПереводите
                                               и получайте деньги из России в Узбекистан без комиссии с кешбэком за
                                             каждый переводПереводите и получайте деньги из России в Узбекистан
                                             без комиссии с кешбэком за каждый переводПереводите и получайте 
                                              деньги из России в Узбекистан без комиссии с кешбэком за каждый 
                                              переводПереводите и получайте деньги из России в Узбекистан без 
                                              комиссии с кешбэком за каждый переводПереводите и получайте
                                              деньги из России в Узбекистан без комиссии с кешбэком за каждый
                                              переводПереводите и получайте деньги из России в Узбекистан 
                                              без комиссии с кешбэком за каждый переводПереводите и получайте
                                             деньги из России в Узбекистан без комиссии с кешбэком за кажды
                                             й переводПереводите и получайте деньги из России в Узбекистан
                                              без комиссии с кешбэком за каждый переводПереводите и получайте
                                                 деньги из Россбез комиссии с кешбэком за каждый переводПе
                    
                    </div>
                 </div>
                 {isClose || <div>
                              {isVisibleBlock && <div className={styles.countrys}>
                                      <div onClick={handleRu} className={clsx(styles.fotoRep, styles.fotoRepColor)}>
                                          <img className={styles.foto} src='https://www.gumer.info/bibliotek_Buks/Polit/Article/flag_clip_image001.gif'/>
                                          <span className={styles.rep}>Русский</span>
                                      </div>
                                      <div onClick={handleEn} className={styles.fotoRep}>
                                          <img className={styles.foto} src='https://www.flagistrany.ru/data/flags/ultra/gb.png'/>
                                          <span className={styles.rep}>English</span>
                                      </div>
                                      <div onClick={handleUz} className={styles.fotoRep}>
                                        <img className={styles.foto} src='https://p4.wallpaperbetter.com/wallpaper/136/687/807/flag-uzbekistan-flag-of-uzbekistan-uzbekistan-large-flag-uzbek-hd-wallpaper-preview.jpg'/>
                                        <span className={styles.rep}>O zbek</span>
                                      </div>
                             </div>}
                 </div>}
        </div>
    );
};

export default HumansLeng;