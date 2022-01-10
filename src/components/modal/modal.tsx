import { useState } from 'react';
import clsx from 'clsx';
import styles from './modal.module.css';
import ReactDOM from 'react-dom';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

interface ModalProps {
    setIsVis: () => void;
}

const Modal = ({setIsVis}: ModalProps) => {

    const stopCloseModal = (e: any) => {
        e.stopPropagation()
    }

    return (
        <>
            <DialogOverlay isOpen={true} >
                <div className={styles.main} onClick={setIsVis}>
                    <div className={styles.modal} onClick={stopCloseModal}>
                        <div className={styles.blockWhite}>
                            <div className={styles.bigText}>
                                Делитесь кешбэком с друзьями
                            </div> 
                            <div className={styles.smollText}>
                                Поделившись кешбэком с другом, вы узвоите кешбэк, когда друг присоединится к Humans.
                            </div> 
                            <button className={styles.btn}>Узнать больше</button>
                        </div>
                        <div className={styles.blockRed}>
                            <button onClick={() => setIsVis()} className={styles.btnСross}>
                                <img className={styles.imagesCross} src='https://humans.uz/static/resources/icons/a23fc65931bb6350a0393f2552628794/close-round.svg'/>
                            </button>
                            <img className={styles.images} src='https://humans.uz/static/bb4b46fd42e015e54f8c38ccc6900693/b8440/x2.webp'/>
                        </div>
                    </div>
                </div>
            </DialogOverlay>
        </>
    )

    
};

export default Modal;