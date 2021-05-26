import "./reverse.css";
import { useState } from 'react';

const Reverse = () => {
const str='qwrtygduehduhf';
const [isColor, setIsColor]=useState(false);
 
const handleClick= () => {
    setIsColor(prepv => !prepv);
}

// const getChar = (char: string, index: number) => index % 3 === 2 ? char.toUpperCase() : char;

 return(
    <>
     <button onClick={handleClick}>click</button>
     <p>
        {!isColor ?
                str : 
                str.split('').map((num, i) => i % 3 === 2 ? num.toUpperCase() : num ).join('')
        }
    </p>
    </>
 )
}
export default Reverse;

