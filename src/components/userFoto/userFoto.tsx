import { SyntheticEvent, useState, useEffect } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './userFoto.module.css';



const UserFoto = () => {
    
    const [mas, setMas] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isClickBtn, setIsClickBtn] = useState(true);


 useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then((data) => data.json())
            .then((result) =>
                setMas(
                    result.data.map((item: {email: string, first_name: string, avatar: string}) => item).slice(0, 6)
                )
            )
    }, []);
 

    const handleDelete = (i: number) => {
        setMas(mas.filter((item, index: number) => i !== index && item ));
        setIsClickBtn(true);
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        },3000)
    }

    const handleAdd = (i: number) => {
        setMas(mas.filter((item, index: number) => i !== index && item ));
        setIsClickBtn(false);
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        },3000)
    }

    return (
        <div className={styles.block}>
            <div className={styles.visidleBlock}>
                 {isVisible && <div className={styles.visidleBlock}>
                      {isClickBtn ? <div className={styles.textRed}>User deleted</div> : <div className={styles.textGreen}>User added to favorites </div>}
                 </div>}
            </div>
            <div className={styles.contUser}>
                 {mas.map((item: {email: string, first_name: string, avatar: string}, i: number) => 
                                      <div key={item.email} className={styles.userInfo}>
                                          <div className={styles.name}>
                                               {item.first_name}
                                          </div>
                                          <div className={styles.email}>
                                               {item.email}
                                          </div>
                                          <img className={styles.foto} src={item.avatar} />
                                          <div className={styles.btn}>
                                               <button onClick={() => handleDelete(i)} className={styles.but}>Delete</button>
                                               <button onClick={() => handleAdd(i)} className={clsx(styles.but, styles.butBack)}>Add</button>
                                          </div>
                                      </div>)}
            </div>
                
        </div>
    );
};

export default UserFoto;