import { useState } from 'react';
import styles from './input.module.css';
  
interface PropsInput {
    newCard: (values: string) => void;
    name: number;
    countInput: number;
}

const Input = ({newCard, countInput, name}: PropsInput) => {
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

    const active = name > 10;

    return(
        <div className={styles.input}>
            <h3>Add Todo</h3>
            <input onChange={handleChange} className={styles.inp} placeholder='Add new todo' value={val} disabled={active} />
            <div className={styles.butAndSpans}>
                <button onClick={handleClick} className={styles.but} disabled={active} >Submit</button>
                <div>
                    <span className={styles.spanText}>number of <br/> pinned cards: </span>
                    <span className={styles.numb}>{countInput}</span> 
                </div>    
            </div>
            
        </div>
    );
};



export default Input;