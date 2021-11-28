import { useEffect, useState, useRef } from 'react';
import styles from './users.module.css';
import clsx from 'clsx';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

interface ItemProps {
    name: string;
    phone: string;
    email: string;
}

const Users = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [mas, setMas] = useState([] as ItemProps[]);
    const [val, setVal] = useState('');
    const [masIsh, setMasIsh] = useState([] as ItemProps[]);
    const [isRedac, setIsRedac] = useState(false);
    const [nameR, setNameR] = useState('');
    const [activeIn, setActiveIn] = useState(0);
    const inputRef = useRef<any>();

    const handleChange = (e: any) => {
        setVal(e.target.value);

        if (e.target.value === '') {
            setMas(masIsh);

            return;
        }

        setMas(
            masIsh.filter(
                (item: { phone: string }) =>
                    item.phone.indexOf(e.target.value) !== -1
            )
        );
    };

    useEffect(() => {
        setIsLoader(true);
        const getData = async () => {
            const data = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            );
            const userInfo = await data.json();
            setMas(userInfo);
            setMasIsh(userInfo);
            setIsLoader(false);
        };
        getData();
    }, []);

    const handleClick = (index: number) => {
        setMasIsh(masIsh.filter((_, i) => i !== index));
        setMas(mas.filter((_, i) => i !== index));
    };

    const handleClick2 = (name: string, index: number) => {
        setActiveIn(index);

        edit(name, index);

        setTimeout(() => {
            inputRef.current.focus();
        }, 1000)
    };

    const edit = (name: string, index: number) => {
        setIsRedac((prev) => !prev);
        setNameR(name);

        const arr = [...mas];
        const newMas = arr.map((item: ItemProps, ind) =>
            ind !== index ? item : { ...item, name: nameR }
        );
        setMas(newMas);

        const arr2 = [...masIsh];
        const newMas2 = arr2.map((item: ItemProps, ind) =>
            ind !== index ? item : { ...item, name: nameR }
        );
        setMasIsh(newMas2);
    };

    const handleChange2 = (e: any, ind: number) => {
        setNameR(e.target.value);

        if (e.key === '32') {
            edit(nameR ,ind)
        }
    };

    return (
        <>
            {isLoader ? (
                <Loader type="Audio" color="#00BFFF" height={80} width={80} />
            ) : (
                <div className={styles.block}>
                    <input
                        onChange={handleChange}
                        className={styles.inp}
                        value={val}
                    />
                    {mas.map((item: ItemProps, ind) => (
                        <div className={styles.lines} key={item.name}>
                            <button
                                onClick={() => handleClick(ind)}
                                className={styles.but}
                            >
                                {' '}
                                Delete{' '}
                            </button>
                            {isRedac && ind === activeIn ? (
                                <input
                                    onChange={(e) => handleChange2(e, ind)}
                                    className={styles.inp}
                                    value={nameR}
                                    ref={inputRef}
                                />
                            ) : (
                                <span>{item.name}</span>
                            )}
                            <span>{item.phone}</span>
                            <span>{item.email}</span>
                            <button
                                onClick={() => handleClick2(item.name, ind)}
                                className={styles.but2}
                            >
                                {' '}
                                Edit name{' '}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Users;
