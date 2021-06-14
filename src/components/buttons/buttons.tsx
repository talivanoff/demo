import { useState } from 'react';
import './buttons.css';
import Button from '../button/Button';

const defaultTitles = ['1', '2', '3', '4'];

const Buttons = () => {
    const [titles, setTitles] = useState(defaultTitles);
    const handleButtonClick = (event: any) => {
        // setTitles(prev => [...prev, '5']);
        const newArray = titles.filter((name) => name !== event.target.innerHTML);
        setTitles(newArray);
    };

    return (
        <div className="btnAll">
            {titles.map((title) => (
                <Button key={title} title={title} handleClick={handleButtonClick} />
            ))}
            <Button title="1" handleClick={handleButtonClick} />
            <Button title="2" handleClick={handleButtonClick} />
            <Button title="3" handleClick={handleButtonClick} />
            <Button title="4" handleClick={handleButtonClick} />
        </div>
    )

}

export default Buttons;

