import { useState} from 'react';
import clsx from 'clsx';
import styles from './deleteUser.module.css';
 


const DeleteUser = () => {
    

    return (
        <div className={styles.blockDeleteUser}>
            <div className={styles.textDeleteUser}>
               Cards of remote users:
            </div>
        </div>
    );
};

export default DeleteUser;