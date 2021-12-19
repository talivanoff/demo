import { useState} from 'react';
import clsx from 'clsx';
import styles from './addUser.module.css';
 


const AddUser = () => {
    

    return (
        <div className={styles.blockAddUser}>
            <div className={styles.textFddUser}>
               Cards of added users:
            </div>
        </div>
    );
};

export default AddUser;