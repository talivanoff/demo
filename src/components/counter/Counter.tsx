import { useState } from 'react';
import Button from '../button/Button';
import './Counter.css';
import Input from '../input/Input';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [inputValue, setInputValue] = useState<number>(9);

    const buttonIncrement = () => {
        setValue(prev => prev + inputValue);
    }

    const buttonDecrement = () => {
        setValue(prev => prev - inputValue);
    }

    const handleInputChange = (event: any) => {
        setInputValue(+event.target.value);
    }

    return (
        <div className="counter">
            <Input inputValue={inputValue} handleInputChange={handleInputChange} />
            <Button title='-' handleClick={buttonDecrement} />
            <div className="text">{value}</div>
            <Button title='+' handleClick={buttonIncrement} />
        </div>
    )
}

export default Counter;