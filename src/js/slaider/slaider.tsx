import { useEffect, useState } from 'react';
import styles from './slaider.module.css';
import clsx from 'clsx';
import Butt from '../butt';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const masPicture = [
    'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
    'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
    'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
    'https://tehnot.com/wp-content/uploads/2017/03/android-o-00.jpg',
];

// https://jsonplaceholder.typicode.com/albums/1/photos

interface ItemProps {
    url: string;
}

const Slaider = () => {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [mas, setMas] = useState([]);
    const handleClick = () => {
        if (count !== 0) {
            setCount(count - 1);
        }
    };

    const handleClick2 = () => {
        if (count !== masPicture.length - 1) {
            setCount(count + 1);
        }
    };

    const handle = (index: number) => {
        setCount(index);
    };

    // useEffect(() => {
    //     setIsLoader(true);
    //     fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    //         .then((data) => data.json())
    //         .then((result) =>
    //             setMas(
    //                 result.map((item: { url: string }) => item.url).slice(0, 8)
    //             )
    //         )
    //         .finally(() => setIsLoader(false));
    // }, []);

    useEffect(() => {
        setIsLoader(true);
        const getData = async () => {
            const data = await fetch(
                'https://jsonplaceholder.typicode.com/albums/1/photos'
            );
            const newData = await data.json();
            setMas(newData.map((item: { url: string }) => item.url));
            setIsLoader(false);
        };
        getData();
        
    }, []);

    const handleChange = (e: any) => {
        if (+e.target.value || e.target.value === '') {
            setCounter(e.target.value);
        }
    };

    return (
        <>
            {isLoader ? (
                <Loader type="Audio" color="#00BFFF" height={80} width={80} />
            ) : (
                <div className={styles.block}>
                    <Butt name="назад" navigetion={handleClick} />
                    {mas.slice(0, +counter).map((item, i) => (
                        <img
                            onClick={() => handle(i)}
                            className={clsx(
                                styles.img,
                                i === count && styles.imgActive
                            )}
                            key={item}
                            src={item}
                        />
                    ))}
                    <Butt name="вперёд" navigetion={handleClick2} />
                    <input
                        onChange={handleChange}
                        value={counter}
                        placeholder="Введите кол-во картинок"
                    />
                </div>
            )}
        </>
    );
};

export default Slaider;
