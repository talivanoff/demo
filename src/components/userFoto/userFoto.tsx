import { useState, useEffect } from 'react';
import styles from './userFoto.module.css';
import ComponentUserFoto from '../componentUserFoto';
 
interface MasProps {
    email: string;
    first_name: string;
    avatar: string;
}

const UserFoto = () => {
    const [mas, setMas] = useState<MasProps[]>([]);
    const [masInp, setMasInp] = useState(mas);
    const [val, setVal] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isClickBtn, setIsClickBtn] = useState(true);   

    useEffect(() => {
        if(localStorage.getItem('UserFoto')) {
            const users = JSON.parse(String(localStorage.getItem('UserFoto')));
            setMas(users);
            setMasInp(users);
        } else {
            fetch('https://reqres.in/api/users')
                .then((data) => data.json())
                .then((result) => {
                    setMas(result.data)
                    setMasInp(result.data);
                    localStorage.setItem('UserFoto',JSON.stringify(result.data));
                });
        }
    }, []);

    const handleBlocks = (i: number) => {
        const deleteElement = mas[i];
        setMasInp(prev => prev.filter((item) =>  item.first_name !== deleteElement.first_name));
        const num = mas.filter((_, index: number) => i !== index);
        setMas(num);
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000)  
    }
    
    let delUser = [];
    const handleDelete = (i: number) => {
        handleBlocks(i);
        setIsClickBtn(true);
        if(localStorage.getItem('UserFotoDelete')) {
                delUser = JSON.parse(String(localStorage.getItem('UserFotoDelete')));
                delUser.push(mas[i]);
                localStorage.setItem('UserFotoDelete',JSON.stringify(delUser));
            } else {
            localStorage.setItem('UserFotoDelete',JSON.stringify([mas[i]]));
        }
    }
    
    let addUser = [];
    const handleAdd = (i: number) => {
        handleBlocks(i);
        setIsClickBtn(false);
        if(localStorage.getItem('UserFotoAdd')) {
                addUser = JSON.parse(String(localStorage.getItem('UserFotoAdd')));
                addUser.push(mas[i]);
                localStorage.setItem('UserFotoAdd',JSON.stringify(addUser));
            } else {
            localStorage.setItem('UserFotoAdd',JSON.stringify([mas[i]]));
        }
    }

    const handleChange = (e: any) => {
        setVal(e.target.value);
        if (!e.target.value.trim()) {
            setMas(masInp);
            return;
        };
        setMas(masInp.filter((item) => item.first_name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1));
    }

    return (
        <div className={styles.block}>
            <div className={styles.visidleBlock}>
                 {isVisible && <div className={styles.visidleBlock}>
                      {isClickBtn ? <div className={styles.textRed}>User deleted</div> : <div className={styles.textGreen}>User added to favorites </div>}
                 </div>}
            </div>
            <div className={styles.blockInput}>
                    <input className={styles.inp} onChange={handleChange} value={val} placeholder='inter a name'/>                         
            </div>
            <div className={styles.contUser}>
                 {mas.map(({email, first_name, avatar}, ind: number) => 
                        <ComponentUserFoto key={email} 
                                            mail={email} 
                                            name={first_name}
                                            foto={avatar}
                                            del={handleDelete}
                                            add={handleAdd} 
                                            isVis
                                            i={ind}/>)}
            </div>                         
        </div>
    );
};

export default UserFoto;