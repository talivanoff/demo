import styles from './componentUserFoto.module.css';
import clsx from 'clsx';

interface ComponentUserFotoProps {
    mail: string;
    name: string;
    foto: string;
    del?: (i: number) => void;
    add?: (i: number) => void;
    isVis?: boolean;
    i: number;
}

const ComponentUserFoto = ({mail, name, foto, isVis, del, add, i}: ComponentUserFotoProps) => {

    const handleDelete = () => {
       if(del) {
        del(i);
       }
    }

    const handleAdd = () => {
        add?.(i);
    }

    return (
            <div className={styles.contUser}>
                <div className={styles.userInfo}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.email}>
                        {mail}
                    </div>
                    <img className={styles.foto} src={foto} />
                    { isVis && <div className={styles.btn}>
                        <button onClick={handleDelete} className={styles.but}>Delete</button>
                        <button onClick={handleAdd} className={clsx(styles.but, styles.butBack)}>Add</button>
                    </div> }
                </div>
            </div>                              
    );
};

export default ComponentUserFoto;