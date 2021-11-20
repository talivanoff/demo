import { useState } from 'react';
import styles from './buttons.module.css';

interface PropsInput {
    hide: () => void;
    butStyle: boolean;
    stop: (bol: boolean) => void;
}


const Buttons = ({hide, butStyle, stop}: PropsInput) => {
   
   const [values,setValues] = useState ('');
    const handleClick = () => {
        hide();  
    }
 const handleChange = (e: any) => {
       if (e.target.value.length <= 7) {
         setValues(e.target.value)
        }

        stop(e.target.value.length > 7); 
    }
   
    return( 
        <div>
            <button onClick={handleClick} className={butStyle ? styles.but : styles.but2}> Submit </button> 
            <input onChange={handleChange} className={styles.inp} placeholder='inter'  type="number" value={values}/>
        </div> 
    )
}

export default Buttons;