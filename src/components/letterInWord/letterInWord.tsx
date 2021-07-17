import './letterInWord.css';
import {useState, useMemo} from 'react';


const LetterInWord = () => {
    
    // const colors = ['orange', 'red', 'blue', 'white', 'black', 'pink', 'green', 'grey']
    // const [letterInColor, setLetterInColor]=useState(colors);
    // const [inp, setInp]=useState('');
    
    
    //  const handleChange = (e: any) => {
    //     setInp(e.target.value);
    //     setLetterInColor(colors.filter((n) => n.includes(e.target.value)));
    //  }

     
    //  return(
    //      <> 
    //        <input value={inp} onChange={handleChange}/>
    //        <p>{letterInColor.map((name) => <div>{name}</div>)}</p>
    //      </>
    //  )


    // # 22222

    // const colors = ['orange', 'red', 'blue', 'white', 'black', 'pink', 'green', 'grey'];
    // const [inp, setInp] = useState('');
    
    // const handleChange = (e: any) => {
    //     setInp(e.target.value);
    // }

    //  return (
    //      <> 
    //        <input value={inp} onChange={handleChange}/>
    //        <p>{colors.map(
    //            (name) => <div style={{ color: name.includes(inp) && inp !== '' ? 'red' : 'black'}}>{name}</div>
    //         )}</p>
    //      </>
    //  )


    // #33333333

    // const str = 'раму Мама мыла';
    // // const [inp, setInp] = useState(0);
    // const [sor, setSor] = useState(str.split(' '));
    
    // // const handleChange = (e: any) => {
    // //     setInp(+e.target.value);
    // // }

    // // const getSelectedText = useMemo(() => str.substr(0, inp), [str, inp]);

    // // const getSimpleText = () => {
    // //     return str.substr(inp, str.length);
    // // }

    // const handleClick = () => {
    //     const newAr = [...sor];
    //     setSor(newAr.sort());
    // }


    //  return (
    //      <> 
    //        <button onClick={handleClick}>sort</button>
    //        {/* <input value={inp} onChange={handleChange}/>
    //        <p><span style={{color: 'red'}}>{getSelectedText}</span>{getSimpleText()}</p> */}
    //        <p>{sor.join(' ')}</p>
    //      </>
    //  )

    // const arr = [
    //     {
    //         name: 'valera',
    //         age: 28,
    //         job: 'programmer'
    //     },
    //     {
    //         name: 'Pavel',
    //         age: 28,
    //         job: 'programmer'
    //     },
    //     {
    //         name: 'Sasha',
    //         age: 28,
    //         job: 'programmer'
    //     },
    //     {
    //         name: 'Kolya',
    //         age: 28,
    //         job: 'programmer'
    //     }
    // ]

    
// #1
    // const [names, setNames] = useState(['']);
    // const handleClick = () => {   
    //     setNames(arr.map((n) =>n.name));
    // }
 
    // return (
    //      <>
    //       <button onClick={handleClick}>=</button>
    //       <div>{names.map((n) => <div>{n}</div>)}</div>
    //      </>
    // )

// #222

    // const [isNames, setisNames] = useState(false);
    // const handleClick = () => {   
    //     setisNames(true);
    // }
 
    // return (
    //      <>
    //       <button onClick={handleClick}>=</button>
    //       <div>{!isNames ? null : arr.map((n) => <div>{n.name}</div>)}</div>
    //      </>
    // )

    // const [resSum, setResSum] = useState('');
    // const [inp, setInp] = useState('');
    // const handleChange = (e: any) => {   
    //     if (e.target.value.length <= 5) {
    //         setInp(e.target.value);
    //         const sum = e.target.value.split('').reduce((ac: string, val: string) => +ac + +val, 0);
    //         setResSum(String(sum));
    //     }
    // }
    
 
 
    // return (
    //      <>
    //       <input value={inp} onChange={handleChange}/>
    //       <p>{resSum}</p>
    //      </>
    // )

//    ###### 55555
    // const word = ['red', 'tet', 'set', 'ded', 'fail', 'stok', 'sos']
    // const [isPalendroms, setIsPalendroms] = useState(false);
    // const [Palendroms, setPalendroms] = useState([]);

    // const handleClick = () => {
    //     const newWords: any = [];

    //     setIsPalendroms(prev => !prev);
        
    //     for(let i = 0; i < word.length; i++){
    //         if (word[i] === word[i].split('').reverse().join('')) {
    //             newWords.push(word[i]);    
    //         }
    //     }

    //     setPalendroms(newWords);

        // for(let i = 0; i < word.length / 2; i++){
        //     if(word[i] !== word[word.length - 1 - i]) {
        //         setIsPalendroms(false);

        //         return;
        //     }

        //     setIsPalendroms(true);
            
        // }
        
    // }
 
    // return (
    //      <>
    //       <button onClick={handleClick}>=</button>
    //       <p>{word.join(' ')}</p>
    //       {isPalendroms && <p>{Palendroms.map((n,i) => `${n} `)}</p>}
    //      </>
    // )






    // ####### 6666666




    // const word ='rokoko iouiouoiu';
    // const [maxMinSize, setMaxMinSize] = useState(16);
    // const [isCases, setIsCases] = useState(false);
    // const handleClick = () => {
    //     setMaxMinSize(prev => prev + 2);
    // }
 
    // const handleClick2 = () => {
    //     setMaxMinSize(prev => prev - 2);
    // }

    // const handleClick3 = () => {
    //     setIsCases(prev => !prev);
    // }
    // return (
    //      <>
    //       <button onClick={handleClick}>+</button>
    //       <button onClick={handleClick2}>-</button>
    //       <button onClick={handleClick3}>case</button>
    //       <p>{word.split('').map((char, index) => 
    //             <span style={{color: 
    //                  isCases ? index % 2 !== 0 ? 'red' : 'green' :
    //                 index % 2 !== 0 ? 'red' : 'black', 
    //                           fontSize: maxMinSize}}>{isCases && index % 2 !== 0 ? char.toUpperCase() : char}</span>)}</p> 
    //      </>
    // )

// ####### 77777777777

    // const word ='rokoko iouiouoiu';
    // const [maxMinSize, setMaxMinSize] = useState(30);
    // const handleClick = () => {
    //     setMaxMinSize(prev => {
    //         let newPrev = 40;
    //         if(maxMinSize < 40 ){
    //             newPrev = prev + 2;
    //         }

    //         return newPrev;
    //     }
    //     )
    // }
 
    // const handleClick2 = () => {
    //     setMaxMinSize(prev => {
    //         let newPrev = 20;
    //         if(maxMinSize > 20 ){
    //             newPrev = prev - 2;
    //         }

    //         return newPrev;
    //     }
    //     )      
    // }
    // return (
    //      <>
    //       <button onClick={handleClick}>+</button>
    //       <button onClick={handleClick2}>-</button>
    //       <p>{word.split('').map((char, index) => 
    //             <span style={{color: index % 2 !== 0 ? 'red' : 'black', fontSize: maxMinSize}}>{char}</span>)}</p> 
    //      </>
    // )
      



    // ########8888888888888888



    const [value, setValue] = useState('');
    
    const handleChange = (e: any) => {
        setValue(e.target.value); 
    }

    return (
         <>
          <input value={value} onChange={handleChange}/>
          <p>{value.slice(5, value.length)}</p>
         </>
    )



}
    


 export default LetterInWord;
