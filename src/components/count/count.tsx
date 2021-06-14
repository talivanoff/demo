import { useState } from 'react';
import './count.css';
import Humans from '../humans/humans';

const Count = () => {
   
    const[isCounter, setIsCounter] = useState(false);
    
    const visionText = () => {
        setIsCounter(prev => !prev);
    }

    return (
        <div className="count">
            <button onClick={visionText}>text</button>
            {isCounter && <Humans tax={10} title="Title" /> }
            {isCounter && <Humans title="Title2" /> }
        </div>
    )
}

export default Count;