import './inputs.css';
import {useState, useEffect} from 'react';

const Inputs = () => {
 const [inp, setInp] = useState('');
 const [inp2, setInp2] = useState('');
 const handleChange = (e: any) => {
    setInp(e.target.value)
 }
 const btn = () => {
   setInp2(inp);
 }

 return(
     <form>
        <input value={inp} onChange={handleChange}/>
       <button type='button' onClick={btn}>push</button>
        
        <p>{+inp2*2}</p>
     </form>
 )
}

    

export default Inputs;