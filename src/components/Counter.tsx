import { useState } from 'react';
import Button from './Button';
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
            <Button title='-' handleClick={buttonDecrement} />
            <div className="text">{value}</div>
            <Button title='+' handleClick={buttonIncrement} />
        </div>
    )
}

export default Counter;