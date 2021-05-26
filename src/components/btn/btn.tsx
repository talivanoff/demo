import "./btn.css";
import { useState } from 'react';

const Btn = () => {
    const [arrValue, setArrValue] = useState<Array<string>>([]);
    
    const handleClick = (name: string) => {
        const newArr = [...arrValue, name];
        setArrValue(newArr);
    }
    const handleClick2 = () => {
        const newArr = [...arrValue];
        newArr.pop();
        setArrValue(newArr);
    }

    const handleClick3 = (index: number) => {
        // const newArr = [];
        // for(let i=0; i<arrValue.length; i++){
        //   if(index !== i){
        //       newArr.push(arrValue[i]);
        //   }
          
        // }
        setArrValue(arrValue.filter((_, i) => index !== i));
    }

    return (
        <>
            <button className="but" onClick={ () => handleClick(`Button${arrValue.length + 1}`)}>Button</button>
            <button className="but" style={{background: 'green'}} onClick={handleClick2}>Button</button>
            {
                arrValue.map((name, index) => (
                    <button onClick={() => handleClick3(index)} key={name + index} className='but2'>{name}</button>
                ))
            }
        </>
    )
}
export default Btn;
