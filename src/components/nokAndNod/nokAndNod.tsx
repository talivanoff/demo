import "./nokAndNod.css";
import { useState, useRef, useEffect } from 'react';
 
const NokAndNod = () => {
    const [inp1, setInp1] = useState<number>(0);
    const [inp2, setInp2] = useState<number>(0);
    const [nodState, setNodState] = useState<number>(0);
    const [nokState, setNokState] = useState<number>(0);

    const handleChange1 = (e: any) => {
       setInp1(+e.target.value)
    }
    
    const handleChange2 = (e: any) => {
        setInp2(+e.target.value)
    }

    // useEffect(() => {
    //     let nod = 1;
    //     let min = inp1 <= inp2 ? inp1 : inp2; 

    //     for(let i=2; i<=min; i++){
    //         if (inp1 % i === 0 && inp2 % i === 0){
    //             nod = i;
    //         }
    //     }
    //     setNodState(nod);
    // }, [inp1, inp2]);

    const calcNOD = () => {
        let nod = 1;
        let min = inp1 <= inp2 ? inp1 : inp2; 

        for(let i=2; i<=min; i++){
            if (inp1 % i === 0 && inp2 % i === 0) {
                nod = i;
            }
        }
        setNodState(nod);
    };

    const calcNOK = () => {
        let nok = 1;
        let max = inp1 >= inp2 ? inp1 : inp2; 

        for(let i=max; i<=inp1*inp2; i++){
            if (i % inp1 === 0 && i % inp2 === 0) {
                nok = i;
                break;
            }
        }
        setNokState(nok);
    };
 
    const handleClick = () => {
        calcNOK();
        calcNOD();
    }

    const inpRef = useRef(null);


    useEffect(() => {
        if(inpRef?.current) {
            (inpRef as any).current.focus();
        }
    }, []);

    return (
          <div className='inputs'>
             <input value={inp1} onChange={handleChange1}/>
             <input ref={inpRef} value={inp2} onChange={handleChange2}/>
             <button onClick={handleClick}>push</button>
             <p>{`NOD: ${nokState}`}</p>
             <p>{`NOK: ${nodState}`}</p>
          </div>
    )
}



export default NokAndNod;