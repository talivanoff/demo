import { useState } from 'react';
import styles from './new2307.module.css';

import { useEffect } from 'react';
 interface PropsCard {
     title: string;
     url: string; 
     button: string; 
     text: string; 
     alt: string;
    
 }
 
 const New2307 = ({title, url, button, text, alt}: PropsCard) => {
//     const [isShow, setIsShow] = useState(false);
//     const [isShow2, setIsShow2] = useState(false);
//     const [isClick, setIsClick] = useState(false);
//     const [count, setCount] = useState<number | string>(5);
//     let ref = useRef<any>({});
    
//     const handle = () => {
//         setIsClick(true);
//     }

//     useEffect(() => {
//         if (isClick) {
//             ref.current = setInterval(() =>{
//                 setCount(count => +count - 1);
//             } , 1000);

//             // setTimeout(() => { 
//             //     clearInterval()
//             // }, 5000);
//             setTimeout(() => {
//                 setIsShow(true);
//             }, 5000);
//         }
//     }, [isClick])

//     useEffect(() => {
//         setTimeout(() => {
//             setIsShow2(true);
//         }, 3000);
//     }, [])

//     useEffect(() => {
//         if (count < 1) {
//             ref.current = null;
//             setCount('ready');
//         }
//     }, [count])
    const [isDel, setIsDel] = useState(true);
    const handle = () => {
        setIsDel(false);
    }

    return (
       <div className={styles. block}>
           <img className={styles.image} src={url} alt={alt} />
           <div className={styles.text}>
               <h2>{title}</h2>
               <span>{text}</span>
           </div>
           {isDel && <button className={styles.btn} onClick={handle}>{button}</button>}
       </div>
//         <div className={styles.block}>
//             <button onClick={handle}>{count}</button>
//             {/* {isShow2 &&<img src='https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/detail_9b31eaf4376cdff03e0ba1bcaa826a01.jpg' alt='error' />} */}
//             {isShow && <h1>Hello</h1>}
            
//         </div>
    )
}

export default New2307;
