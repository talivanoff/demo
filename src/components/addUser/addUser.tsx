import { useState, useEffect} from 'react';
import styles from './addUser.module.css';
import ComponentUserFoto from '../componentUserFoto';
 
interface MasAddProps {
    email: string;
    first_name: string;
    avatar: string;
}

const AddUser = () => {
    
    const [masAdd, setMasAdd] = useState<MasAddProps[]>([]);

    useEffect(() => {
        const users = JSON.parse(String(localStorage.getItem('UserFotoAdd')));
        if(users) {
            setMasAdd(users);
        }   
    }, []);
    
    return (
        <div className={styles.blockAddUser}>
            <div className={styles.textAddUser}>
               Cards of added users:
            </div>
            <div className={styles.contUsers}>
                 {masAdd.map((item, i: number) => 
                    <ComponentUserFoto key={`${item.email} ${i}`} 
                        mail={item.email} 
                        name={item.first_name}
                        foto={item.avatar}
                        i={i} />)};
            </div>  
        </div>
    );
};

export default AddUser;