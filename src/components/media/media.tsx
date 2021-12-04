import { SyntheticEvent, useState, useEffect, useRef } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './media.module.css';
import { stringify } from 'querystring';



const Media = () => {
    const [mas, setMas] = useState([])
    const [valEmail, setValEmail] = useState('')
    const [valZipcode, setValZipcode] = useState('')
    const [isText, setIsText] = useState(false)
    useEffect(() => {
const getData = async () => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const images = await data.json()
    setMas(images);
};
getData();
    }, [])
    const handleChangeEmail = (e: any) => {
        setValEmail(e.target.value);
    };

    const handleChangeZipcode = (e: any) => {
        setValZipcode(e.target.value);
    };

    const handleClickEnter = () => {
      mas.forEach((item: {email: string, address: { zipcode: string}}) => {
        if ((item.email === valEmail && item.address.zipcode ===  valZipcode)) {
            setIsText(true);
        }
      })
      setValEmail(''); 
      setValZipcode('');
    }
    return (
            <div className={styles.bl}>
                <input
                        onChange={handleChangeEmail}
                        className={styles.inputs}
                        value={valEmail}
                        placeholder="login"
                    />
                            <input
                            type='password'
                        onChange={handleChangeZipcode}
                        className={styles.inputs}
                        value={valZipcode}
                        placeholder="password"
                    />

                    <button onClick={handleClickEnter} className={styles.btn}>
                        Enter
                    </button>
                    {isText && <p className={styles.text}>Welcome to the website</p>}
            </div>
    );
};

export default Media;