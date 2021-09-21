import { useState } from 'react';
import styles from './input.module.css';
  
interface PropsInput {
    newCard: (values: string) => void;
}

const Input = ({newCard}: PropsInput) => {
    const [val, setVal] = useState('');
    const handleChange = (e: any) => {
        setVal(e.target.value);
    }
    const handleClick = () => {
        const rrr = val.trim();
       if (rrr) {
           newCard(rrr);
           setVal('');
       }    
    }



    return(
        <div className={styles.input}>
            <h3>Add Todo</h3>
            <input onChange={handleChange} className={styles.inp} placeholder='Add new todo' value={val} />
            <button onClick={handleClick} className={styles.but}>Submit</button>
        </div>
    );
};



export default Input;