import './sizeText.css';
import {useState} from 'react';

const SizeText = () => {
    const [inp, setInp] = useState(0);
    const [count, setCount] = useState(0);
    const handleClick = (value: number) => {
        setCount(prev => value === 0 ? prev + 1 : prev + value);
        setInp(0);
    }
    const handleReset = () => {
        setCount(0);
        setInp(0);
    }
    const handleChange = (e: any) => {
        setInp(+e.target.value)
     }
    
    return (
        <div>
            <button onClick={() => handleClick(inp)} >+</button>
            <button onClick={() => handleClick(-inp)} >-</button>
            <button onClick={handleReset} >reset</button>
            <input value={inp} onChange={handleChange}/>
            <p style={{fontSize: count > 10 ? 40 : 16, color: count < 0 ? 'red' : 'black'}}>{count}</p>
        </div>
    )
}


export default SizeText;