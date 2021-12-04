import { SyntheticEvent, useState, useEffect, useRef } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './slider.module.css';

import arrow from '../../images/arrow.svg';

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


const Slider = () => {
    // const [mas, setMas] = useState<TodosProps[]>([] as TodosProps[]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await fetch(
    //             'https://jsonplaceholder.typicode.com/photos'
    //         );
    //         const todos = await data.json();
    //         setMas(todos.slice(0, 7));
    //     };
    //     getData();
        
    // }, []);
    const [valCounter, setValCounter] = useState(1);
    
    const further = () => {
        if(slides.length > valCounter) {
           setValCounter(valCounter + 1);
        } else {
           setValCounter(1);
        }
    }

    const back = () => {
        if(valCounter > 1) {
            setValCounter(valCounter - 1);
         } else {
            setValCounter(slides.length);
         }
    }

    const futerBtn = (ind: number) => {
        setValCounter(ind);
    }

    return (
        <div className={styles.slaiders}>
            <div className={styles.leftSaid}></div>
            <div className={styles.content}>
                <h1 style={{fontSize: '40px'}}>Слайдер</h1>
                <div className={styles.progressBar}>
                    {slides.map((item: {img: string, text: string}, i: number) => 
                        <span key={item.img} className={clsx(styles.block, valCounter === i + 1 && styles.blockActive)}></span>)}
                </div>

                <div className={styles.foto}>
                    {slides.map((item: {img: string, text: string}, i: number) => 
                        <div key={item.text} className={valCounter !== i + 1 ? styles.imagesHiden : styles.imagesBlock}>
                            <img className={styles.bigImages} src={item.img}/>
                            <span className={styles.text}>{i + 1} / {slides.length}</span>
                            <div className={styles.names}>{item.text}</div> 
                        </div>
                    )}
                    <div onClick={further} className={clsx(styles.divArrow, styles.divArrowR)}>
                        <img className={clsx(styles.arrow, styles.arrowR)} src={arrow} />
                    </div>
                    <div onClick={back} className={styles.divArrow}>
                        <img className={styles.arrow} src={arrow} />   
                    </div>
                </div>
                <div className={styles.progressBar2}>
                    {slides.map((item: {text: string}, ind) => 
                        <div key={item.text}  onClick={() => futerBtn(ind + 1)} 
                            className={valCounter !== ind + 1 ? styles.circle : styles.circleActive}></div>)}
                </div>
            </div>
        </div>
    );
};

export default Slider;
