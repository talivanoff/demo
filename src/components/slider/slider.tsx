import { SyntheticEvent, useState, useEffect, useRef } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './slider.module.css';

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
    
    const [isActive, setIsActive] = useState(false);

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
    slides.map((_, i) => i === ind && setIsActive(true))
    }

    return (
        <div className={styles.slaiders}>
            <div className={styles.leftSaid}></div>
            <div className={styles.content}>
                <h1 style={{fontSize: '40px'}}>Слайдер</h1>
                <div className={styles.progressBar}>
                    {slides.map((item: {img: string, text: string}, i: number) => 
                        <span key={item.img} className={styles.block}></span>)}
                </div>

                <div className={styles.foto}>
                    {slides.map((item: {img: string, text: string}, i: number) => 
                            <>
                               <img key={item.text} className={styles.bigImages} src={item.img}/>
                               <span className={styles.text}>{i + 1} / {slides.length}</span>
                               <span key={item.text} className={styles.names}>{item.text}</span> 
                            </>)}
                    
                    <img onClick={further} className={styles.arrowL} src='/images/l.svg' />
                    <img onClick={back} className={styles.arrowR} src='/images/r.svg' />
                        
                </div>
                <div className={styles.progressBar}>
                    {slides.map((item: {text: string}, ind) => 
                        <div key={item.text}  onClick={() => futerBtn(ind)} 
                            className={!isActive ? styles.circle : styles.circleActive}></div>)}
                </div>
            </div>
        </div>
    );
};

export default Slider;
