import './countClick.css';
import {useState} from 'react';

const CountClick = () => {
    const [buttonIncriment, setButtonIncriment] = useState('');
    const clickButton = (name: string) => {
        setButtonIncriment(name);
    }

    const clickButton2 = (e: any) => {
        setButtonIncriment(e.target.innerHTML);
    }

    const clickButton3 = () => {
        setButtonIncriment('Button5');
    }

    const clickButton4 = () => {
        setButtonIncriment('Button6');
    }

    return(
        <div>
            <button className='texts3' onClick={() => clickButton('Button1')}>Button1</button>
            <button className='texts3' onClick={() => clickButton('Button2')}>Button2</button>

            <button className='texts3' onClick={clickButton2}>Button3</button>
            <button className='texts3' onClick={clickButton2}>Button4</button>

            <button className='texts3' onClick={clickButton3}>Button5</button>
            <button className='texts3' onClick={clickButton4}>Button6</button>
            <p>{buttonIncriment}</p>
        </div>
    )
}
 
export default CountClick;

