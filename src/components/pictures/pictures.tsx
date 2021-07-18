import styles from './pictures.module.css';
import clsx from 'clsx';

interface PropsCards {
    url: string;
    name: string;
    alt?: string;
    isButton: boolean;

} 


const Pictures = ({url, name, alt='picture', isButton}: PropsCards) => {
    return (
        <div className={styles.pict} >
            <img src={url} alt={alt}/> 
            <p>{name}</p> 
            {isButton && <button >btn</button>}
        </div>
    );

} 

export default Pictures;