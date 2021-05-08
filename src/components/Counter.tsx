import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [value, setValue] = useState(0);

    const buttonIncrement = () => {
        setValue(prev => prev + 1);
    }

    const buttonDecrement = () => {
        setValue(prev => prev - 1);
    }

    return (
        <div className="counter">
            <button className="button" onClick={buttonDecrement}>-</button>
            <div className="text">{value}</div>
            <button className="button" onClick={buttonIncrement}>+</button>
        </div>
    )
}

export default Counter;