import { useState, useEffect} from 'react';
import styles from './deleteUser.module.css';
import ComponentUserFoto from '../componentUserFoto';

interface MasDeleteProps {
    email: string;
    first_name: string;
    avatar: string;
} 

const DeleteUser = () => {
    
    const [masDelete, setMasDelete] = useState<MasDeleteProps[]>([]);

    useEffect(() => {
            const users = JSON.parse(String(localStorage.getItem('UserFotoDelete')));
            if(users) {
                setMasDelete(users);
            }   
    }, []);

    return (
        <div className={styles.blockDeleteUser}>
            <div className={styles.textDeleteUser}>
                Cards of remote users:
            </div>
            <div className={styles.contUsers}>
                {masDelete.map((item, i: number) => 
                        <ComponentUserFoto key={`${item.email} ${i}`} 
                                mail={item.email} 
                                name={item.first_name}
                                foto={item.avatar}
                                i={i} />)};
            </div>                              
        </div>
    );
};

export default DeleteUser;