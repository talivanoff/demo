import './sumInput.css';
import {useState} from 'react';

// const SumInput = () => {
//     const [sum, setColcul] = useState(0);
//     const [inp, setInp] = useState(0);
//     const [inp2, setInp2] = useState(0);
//     const [inp3, setInp3] = useState('+');

//         const handleChange1 = (e: any) => {
//             setInp(+e.target.value)
//         }
//         const handleChange3 = (e: any) => {
//             setInp3(e.target.value);
//         }
//         const handleChange2 = (e: any) => {
//             setInp2(+e.target.value)
//         }
//         const handleReset = () => {
//             setColcul(0);
//             setInp(0);
//             setInp2(0);
//             setInp3('');
//         }
            
//         const handleClickSum = () => {
//             if(inp3 === '+') { 
//                 setColcul(inp + inp2);
//             } else if (inp3 === '-') {
//                 setColcul(inp - inp2);
//             } else if (inp3 === '*') {
//                 setColcul(inp * inp2);
//             } else if (inp3 === '/') {
//                 setColcul(inp / inp2);
//             } else {
//                 setColcul(NaN as number); 
//             }

//             setInp(0);
//             setInp2(0);
//             setInp3('+');
//         }

//     return (
//            <> 
//             <p>{sum}</p>
//             <input value={inp} onChange={handleChange1}/>
//             <input className='simval' value={inp3} onChange={handleChange3}/>
//             <input value={inp2} onChange={handleChange2}/>
//             <button onClick={handleClickSum}>=</button>
//             <button onClick={handleReset}>reset</button>
             
                
            
//             </>
//     )
// }

const SumInput = () => {
   const [inp, setInp] = useState('');
   
   const handleChange = (e: any) => {
    setInp(e.target.value);
   }
   const handleClickRevers = () => {
      // setInp(inp.split("").reverse().join(""));
    }

   return (
        <>
        <button onClick={handleClickRevers}>=</button>
        <input value={inp} onChange={handleChange}/>
        <p>{inp.split("").reverse().join("")}</p>
        </>
   )
}
export default SumInput;