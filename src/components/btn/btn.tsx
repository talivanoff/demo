import "./btn.css";
import { useState } from 'react';

const Btn = () => {
    const [value, setValue] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [isActive2, setIsActive2] = useState(true);
    const [value2, setValue2] = useState("Button");

    const buttonOrangeIncrement = () => {
        setValue(prev => prev + 1);
        setIsActive(prev => !prev);
    }
    const buttonBlueIncrement = () => {
        setValue(prev => prev + 3);
        setIsActive2(prev => !prev);
    }

    const buttonBlack = () => {
        setValue(0);
        setValue2("Button");
        setIsActive(true);
        setIsActive2(true);
    }

    const buttonGreen = () => {
        setValue2(prev => prev === "Button2" ? "Button" : "Button2");
    }
    
    return (
        <div>
           <p className="text">{value}</p>
           <div className="main">
               <button className={isActive ? "button" : "button active"} onClick={buttonOrangeIncrement} type="submit">Button</button>
               <button className={isActive2 ? "button blueButton" : "button active"} onClick={buttonBlueIncrement} type="submit">Button</button>
               <button className="button blackButton" onClick={buttonBlack} type="submit">Button</button>
               <button className="button greenButton" onClick={buttonGreen} type="submit">{value2}</button>
           </div>
        </div>

    )
}
export default Btn;