import { useState } from 'react';
import styles from './modalComp.module.css';
import Modal from '../modal';


const ModalComp = () => {
    const[isVisModal, setIsVisModal] = useState(false);
    
    const handleClick = () => {
        setIsVisModal(true);

        const body = document.body;
        body.style.overflow = 'hidden';
    }

    const modalClose = () => {
        setIsVisModal(false);

        const body = document.body;
        body.style.overflow = 'scroll';
    }


    return (
        <div className={styles.blockBig}>
             <div className={styles.blockRed}>
                <div className={styles.text}>
                    <div className={styles.bigText}>
                        Делитесь кешбэком с друзьями
                    </div> 
                    <div className={styles.smollText}>
                        и получайте в 2 раза больше
                    </div> 
                    <button onClick={handleClick} className={styles.btn}>Подробнее</button>
                </div>
                <img className={styles.images} src='https://humans.uz/static/bb4b46fd42e015e54f8c38ccc6900693/b8440/x2.webp'/>
             </div>
             {isVisModal && <Modal setIsVis={modalClose} />}
        </div>
    );
};

export default ModalComp;