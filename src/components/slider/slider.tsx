import { SyntheticEvent, useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './slider.module.css';
import card from './images/l.svg'
import card2 from './images/r.svg'

const slides = [
    {
        img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        text: 'Caption Text 1'
    },
    {
        img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
        text: 'Caption Text 2'
    },
    {
        img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
        text: 'Caption Text 3'
    },
];
//    const masIndexs: [] = [];

const Slider = () => {
    
    const [valCounter, setValCounter] = useState(0);
    const [isSlider, setIsSlider] = useState(true);
    const inputRef = useRef<any>();
    const [val, setVal] = useState<string>('');
    
    useEffect(() => inputRef.current.focus(), []);

    useEffect(() => {
        if(!isSlider) {  
            const inter = setInterval(() => {
                if(slides.length - 1 > valCounter) {
                    setValCounter(valCounter + 1);
                } else {
                    setValCounter(0);
                }
            }, 5000);
            return() => clearInterval(inter);
        }
    }, [isSlider, valCounter]);
    
    const handleBtn = () => {
        setIsSlider(prev => !prev);
        if(!isSlider) {
            return;
        }
        if(slides.length - 1 > valCounter) {
            setValCounter(valCounter + 1);
        } else {
            setValCounter(0);
        }
    };


    const further = () => {
        if(slides.length - 1 > valCounter) {
           setValCounter(valCounter + 1);
        } else {
           setValCounter(0);
        }
    }

    const back = () => {
        if(valCounter > 0) {
            setValCounter(valCounter - 1);
         } else {
            setValCounter(slides.length - 1);
         }
    }

    const futerBtn = (ind: number) => {
        setValCounter(ind);
    }

    const smollImgBtn = (ind: number) => {
        setValCounter(ind);
    }

    const indexes = useMemo(() => slides.map((_, i: number) => i + 1), [slides]);
    
    const handleChange = useCallback((e: any) => {
        if (indexes.includes(+e.target.value)) {
            setVal(e.target.value);
        }

        if (e.target.value === '') {
            setVal(e.target.value);
            setValCounter(0)
        }
    }, [indexes, setVal, setValCounter]);


    useEffect(() => {
        if (indexes.includes(+val)) {
            setValCounter(+val - 1);
        }
    }, [val])

    return (
        <div className={styles.slaiders}>
            <div className={styles.leftSaid}></div>
            <div className={styles.content}>
                <div className={styles.miniContent}>
                    <h1 style={{fontSize: '40px'}}>Слайдер</h1>
                    <div className={styles.inpBtn}>
                        <input
                            onChange={handleChange}
                            className={styles.inputs}
                            value={val}
                            ref={inputRef}
                        />
                        <button onClick={handleBtn} className={clsx(styles.btn, styles.btnAdd)}>
                            slider {isSlider ? 'start' : 'stop'}
                        </button>
                    </div>
                </div>
                <div className={styles.progressBar}>
                    {slides.map((item: {img: string, text: string}, i: number) => 
                         <div key={item.img} className={clsx(styles.block, valCounter >= i && styles.blockActive)}></div>)}
                </div>

                <div className={styles.foto}>
                    {slides.map((item: {img: string, text: string}, i: number) => 
                          valCounter === i && <>
                        <img key={item.text} className={styles.bigImages} src={item.img}/>
                        <span className={styles.text}>{i + 1} / {slides.length}</span>
                        <span key={item.text} className={styles.names}>{item.text}</span> 
                    </>)}
                    
                    <img onClick={back} className={styles.arrow} src={card} />
                    <img onClick={further} className={clsx(styles.arrow, styles.arrowR)} src={card2} />
                        
                </div>
                <div className={styles.progressBarImg}>
                    {slides.map((item: {img: string}, index) =>               
                        <img key={item.img} onClick={() => smollImgBtn(index)} 
                             className={clsx(styles.smollImg, valCounter === index && styles.smollImgActive)} 
                             src={item.img}/>
                    )}
                </div>
                <div className={styles.progressBar2}>
                    {slides.map((item: {text: string}, ind) => 
                        <div key={item.text}  onClick={() => futerBtn(ind)}
                             className={clsx(styles.circle, valCounter === ind && styles.circleActive)}>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default Slider;
