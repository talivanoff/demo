import './butColor.css';
import But from '../but/but';
import { useState } from 'react';
import Humans from '../humans/humans';

const ButColor = () => {
    const [title ,seTitle] = useState('');
    const handleClick = (color: string) => {
        seTitle(color);
    }
    const [isFail, setIsFail] = useState(false);
    const handleClick2 = () => {
        setIsFail(prev => !prev);
    }
    const [isNoFails, setIsNoFails] = useState(true);
    const handleClick3 = () => {
        setIsNoFails(false);
    }
    
    const handleClick4 = () => {
        setIsNoFails(true);
    }
    return (
        <>
        {isNoFails ? (<div>
            <But background='green' title='green' click={() => handleClick('green')}/>
            <But background='red' title='red' click={() => handleClick('green')}/>
            <But background='yellow' title='yellow' click={() => handleClick('green')}/>
            <But background='pink' title='pink' click={() => handleClick('green')}/>
            <But click={handleClick2}/>
            <But background='orange' title='orange' click={handleClick3}/>
            
            {title}
            {isFail && <Humans />}
        </div>) : <But background='purple' title='purple' click={handleClick4}/>}
        </>
    )

}

export default ButColor;

