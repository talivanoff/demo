import React, { useState } from 'react';
import Input from '../input/Input';
import './counter2.css';

const Counter2 = () => {
    const [value, setValue] = useState(0);

    const handleInputChange = (event: any) => {
        setValue(event.target.value)
    }

    return (
        <div className="counter">
            <Input inputValue={value} handleInputChange={handleInputChange}/>
            <div className="text">{value}</div>
        </div>
    )
}

export default Counter2;