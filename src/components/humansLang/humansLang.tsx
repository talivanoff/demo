import { SyntheticEvent, useState, useEffect} from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './humansLang.module.css';
import Tab from '../tab';

 const masLang = [
      {
        name: 'Русский',
        src: 'https://www.gumer.info/bibliotek_Buks/Polit/Article/flag_clip_image001.gif',
        lang: 'ru'
      },
      {
        name: 'English',
        src: 'https://www.flagistrany.ru/data/flags/ultra/gb.png',
        lang: 'en'
      },
      {
        name: 'O\'zbek',
        src: 'https://parliament.gov.uz/upload/medialibrary/101/bayroq.gif',
        lang: 'uz'
      },
 ];

const HumansLang = () => {

  const handleScroll = (e: any) => {
    if(scrollY > 170) {
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
     return () =>
     window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBlockBtn = () => {
      setIsVisibleBlock(prev => !prev);
      setIsArrow(prev => !prev);
    }
  
    const handleClose = () => {
      setIsClose(true);
    }
    
    const handleLang = (lang: string) => {
        localStorage.setItem('Language of the site Humans',lang);
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
                          <div>
                              {isVisibleBlock && <div className={styles.countries}>
                                  {masLang.map((item, i) => <Tab handleLang1={handleLang} item={item} key={item.name} />
                                  
                                  // <div onClick={() => handleLang(i)} key={item.name} className={i !== 0 ? styles.fotoRep : clsx(styles.fotoRep, styles.fotoRepColor)}>
                                  //                               <img className={styles.foto} src={item.src}/>
                                  //                               <span className={styles.rep}>{item.name}</span>
                                  //                           </div>
                                  )}  
                              </div>}
                          </div>
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
        </div>
    );
};

export default HumansLang;