import "./calc.css";
import React, { useState, useCallback } from 'react';

const Calc = () => {
    const [buttonState, setButtonState] = useState({isActive1: false, isActive2: false, isActive3: false, });
    const [sum, setSum] = useState(0);
    const masBut = [100, 200, 500];
    const handleClick = useCallback((index: number) => {
        // @ts-ignore
        setButtonState(prev => { return { ...prev, [`isActive${index}`] : !prev[`isActive${index}`] }} );
        // @ts-ignore
        setSum(prev => buttonState[`isActive${index}`] ? +prev - masBut[index - 1] : +prev + masBut[index - 1]);
    }, [setButtonState, setSum]);

 

    // const handleClick2 = (e:any) => {
    //     setButtonState(prev => { return { ...prev, isActive2: !prev.isActive2 }} );
    //     setSum(prev => buttonState.isActive2 ? +prev - +e.target.innerHTML : +prev + +e.target.innerHTML);
        
    // }

    // const handleClick3 = (e:any) => {
    //     setButtonState(prev => { return { ...prev, isActive3: !prev.isActive3 }} );
    //     setSum(prev => buttonState.isActive3 ? +prev - +e.target.innerHTML : +prev + +e.target.innerHTML);
    // }
    

    return (
          <div className='buttons'>
              {
                masBut.map((title, index) => (
                    <button key={title}
                    // @ts-ignore
                    style={{background: buttonState[`isActive${index + 1}`] ? 'red' : 'rgb(239, 239, 239)'}}
                    onClick={() => handleClick(index + 1)}>{title}</button>
                ))
              }
               
              <p>{`Суммa: ${sum}`}</p>
          </div>
    )
}



export default Calc;