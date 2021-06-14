import './inputMax.css';
import {useState, useEffect} from 'react';

// const InputMax = () => {
//  const [inp, setInp]=useState(0);
//  const [inp2, setInp2]=useState(0);
//  const [inpMax, setInpMax]=useState(0);

//  const handleChange = (e: any) => {
//     setInp(+e.target.value)
//  }

//  const handleChange2 = (e: any) => {
//     setInp2(+e.target.value)
//  }
  
//  const handleClick = () => {
//     setInpMax((inp >= inp2) ? inp : inp2);
//  }

//  return(
//      <>
//        <input value={inp} onChange={handleChange}/>
//        <input value={inp2} onChange={handleChange2}/>
//        <button onClick={handleClick}>push</button>
//        <p>{inpMax}</p>
//      </>
//  )
// }

// const InputMax = () => {
    
//     const [isText, setIsText]=useState(false);
//     const [isGreen, setIsGreen]=useState(false); 
//     const handleClick = () => {
//        setIsText(prev => !prev);
//     }
//     const handleClick2 = () => {
//         setIsGreen(prev => !prev);
//      }
   
//     return(
//         <>
          
//           <button onClick={handleClick}>push</button>
//          {isText && 
//          <div className='rrr'>
//           <button onClick={handleClick2}>push</button>
//           <p>{isGreen ? 
//           'Text2222'.split('').map((char, index) => index % 3 !== 2 ? char : <span style={{color: 'red'}}>{char}</span>
//           ) : 'Text2222'}</p>
//          </div>
//          }
         
//         </>
//     )
//    }

//    const InputMax = () => {
    
//     const [isRed, setIsRed]=useState(false);
//     const [isRed2, setIsRed2]=useState(false);
//     const [isRed3, setIsRed3]=useState(false);
//     const [isRed4, setIsRed4]=useState(false);
   
//     const handleClick = () => {
//         setIsRed(prev => !prev);
//     }
//     const handleClick2 = () => {
//         setIsRed2(prev => !prev);
//     }
//     const handleClick3 = () => {
//         setIsRed3(prev => !prev);
//     }
//     const handleClick4 = () => {
//         setIsRed4(prev => !prev);
//     }
//     return(
//         <div className='eee'>
          
//           <button onClick={handleClick} className={isRed ? 'button red' : 'button'}>push</button>
//           <button onClick={handleClick2} style={{background: isRed2 ? 'red' : ''}}>push</button>
//           <button onClick={handleClick3} style={{background: isRed3 ? 'red' : ''}}>push</button>
//           <button onClick={handleClick4} style={{background: isRed4 ? 'red' : ''}}>push</button>
         
//         </div>
//     )
//    }



// const InputMax = () => {
    
// const [arrayColors, setArrayColors]=useState([false, false, false, false]);


//     const handleClick = (param: number) => {
//         setArrayColors(prev =>  {
//             const newAr = [...prev];
//             newAr[param] = !newAr[param];

//             return newAr;
//         });
//     }

//     return(
//         <div className='eee'>
//             <button onClick={() => handleClick(0)} style={{background: arrayColors[0] ? 'red' : ''}}>push</button>
//             <button onClick={() => handleClick(1)} style={{background: arrayColors[1] ? 'red' : ''}}>push</button>
//             <button onClick={() => handleClick(2)} style={{background: arrayColors[2] ? 'red' : ''}}>push</button>
//             <button onClick={() => handleClick(3)} style={{background: arrayColors[3] ? 'red' : ''}}>push</button>
//         </div>
//     )
// }

// const InputMax = () => {
    
//     const [arrayColors, setArrayColors]=useState([{isActive: false}, false, false, false]);
    
    
//         const handleClick = (param: number) => {
//             setArrayColors(prev =>  {
//                 const newAr = [...prev];
//                 newAr[param] = !newAr[param];
    
//                 return newAr;
//             });
//         }
    
//         return(
//             <div className='eee'>
//                 {
//                     ['button1', 'button2', 'button3', 'button4'].map((name, index) => 
//                         <button onClick={() => handleClick(index)} style={{background: arrayColors[index] ? 'red' : ''}}>{name}</button>
//                     )
//                 }
//             </div>
//         )
//     }
    


// const InputMax = () => {
    
//     const [arrayColors, setArrayColors]=useState([{isActive: false, colors: 'red'}, 
//                                                   {isActive: false, colors: 'pink'}, 
//                                                   {isActive: false, colors: 'orange'}, 
//                                                   {isActive: false, colors: 'green'}]);
    
    
//         const handleClick = (param: number) => {
//             setArrayColors(prev =>  {
//                 const newAr = [...prev];
//                 const obj = {...newAr[param]};
//                 obj.isActive = true;

//                 console.log(newAr);
    
//                 return newAr;
//             });
//         }
    
//         return(
//             <div className='eee'>
//                 {
//                     ['button1', 'button2', 'button3', 'button4'].map((name, index) => 
//                         <button onClick={() => handleClick(index)} style={{background: arrayColors[index].isActive ? arrayColors[index].colors : ''}}>{name}</button>
//                     )
//                 }
//             </div>
//         )
//     }




const InputMax = () => {
    
    const [textMaxMin, setTextMaxMin]=useState(16);

     const handleClick = () => {
        setTextMaxMin(prev => prev + 2);

     }
     const handleClick2 = () => {
        setTextMaxMin(prev => prev - 2);
     }
    
     return(
         <>
           
           <button onClick={handleClick}>push +</button>
           <button onClick={handleClick2}>push -</button>
           <p style={{fontSize: `${textMaxMin}px`, color: textMaxMin >= 28 ? 'red' : ''}}>text</p>
         </>
     )
    }
    


    export default InputMax;


