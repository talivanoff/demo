import { useEffect, useState } from 'react';
import styles from './slaider.module.css';
import clsx from 'clsx';
import Butt from '../butt';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// const masPicture = [
//     'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
//     'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
//     'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
//     'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg'
// ];

interface ItemProps { 
    url: string;
}

const Slaider = () => {
    const [count, setCount] = useState(0);
    const [masPicture, setMasPicture] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const handleClick = () => {
        if(count !== 0) {
            setCount(count-1);
        } 
    }

    const handleClick2 = () => {
        if(count !== masPicture.length-1) {
            setCount(count+1);
        } 
    }

    const handle = (index: number) => {
        setCount(index);
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    //         .then(data => data.json())
    //         .then(result => {
    //             setMasPicture(result.map((item: ItemProps) => item.url).slice(0, 4));
    //         })
    //         .catch(() => {
    //             console.log('error')
    //         })
    // }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoader(true);
                const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
                const data = await res.json();
    
                setMasPicture(data.map((item: ItemProps) => item.url).slice(0, 4));
            } catch (e) {
                console.log('error')
            } finally {
                setIsLoader(false);
            }
        }

        getData()
    }, []);
   
    return(
        <>
            {isLoader ? <Loader type="Audio" color="#00BFFF" height={80} width={80}/> : <div className={styles.block}> 
                <Butt name='назад' navigetion={handleClick}/>
                {masPicture.map((item,i) => 
                    <img onClick={() => handle(i)} className={clsx(styles.img, i === count && styles.imgActive)} key={item} src={item} />
                )}   
                <Butt name='вперёд' navigetion={handleClick2}/>        
            </div>}
        </>
    )
}

export default Slaider;