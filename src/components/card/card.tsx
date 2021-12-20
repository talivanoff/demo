import { useState } from 'react';
import clsx from 'clsx';
import styles from './card.module.css';


interface PropsCard {
   name: string;
   index: number;
   delCard: (index: number)=> void;
   changeText: (val: string, indik: number)=> void;
   countAnchor: (index: number) => void;
   
}

const Card = ({ delCard, countAnchor, name, index, changeText }: PropsCard) => {
const [isTr, setIsTr] = useState(false);
const [isAnchor, setIsAnchor] = useState(false);
const [val, setVal] = useState(name);

const handleChange = (e: any) => {
    setVal(e.target.value);
}

const handleClick = () => {
    delCard(index);  
}

const handleClick2 = () => {
    setIsTr(prev => !prev);
}

const handleClick3 = () => {
    setIsTr(prev => !prev);
    changeText(val, index);
}

const handleClick4 = () => {
    setIsAnchor(prev => !prev);
    countAnchor(index);
}

return (
    <div className={styles.text}>
        {!isTr ? <span className={styles.inform}>{name}</span> :
        <input onChange={handleChange} className={styles.inp} value={val} /> }
        <div>
            {/* { !isTr || !isAnchor ? <button onClick={handleClick} className={clsx(styles.button, styles.del)}>Delete</button>} */}
            {!isTr ? ( 
                <>
                   {!isAnchor && <button onClick={handleClick} className={clsx(styles.button, styles.del)}>Delete</button>}
                    <button onClick={handleClick2} className={clsx(styles.button, styles.edit)}>Edit</button>
                    <button onClick={handleClick4} className={clsx(styles.button, styles.anchor)}>anchor</button>
                </>
            ) : <button onClick={handleClick3} className={clsx(styles.button, styles.ok)}>Ok</button>} 
            
        </div>
        
    </div>
);
};



export default Card;