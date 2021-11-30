import Input from './components/input';
import Card from './components/card';
import clsx from 'clsx';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import Buttons from './js/buttons';
import ImgText from './js/imgText/imgText';
import Slaider from './js/slaider/slaider';
import Users from './js/users';
import InputTest from './components/inputTest';
import TodoList from './components/todoList';
import Posts from './components/posts';

const mas = [
    {
        name: 'fgfg',
        secondName: 'rrrr',
        age: 12,
    },
    {
        name: 'aaa',
        secondName: 'rrrr',
        age: 14,
    },
    {
        name: 'bbb',
        age: 17,
    },
    {
        name: 'cccc',
        secondName: 'rrrr',
        age: 16,
    },
];

const App = () => {
    // const cards = JSON.parse(localStorage.getItem('keyValue') as string) as Array<{ name: string; anchor: boolean}>;
    // const [rend, setRend] = useState(cards?.length ? cards : masCard);
    // const [count, setCount] = useState<number>(0);
    // const removeCard = (indexлюбоеслово: number) => {
    //   setRend(rend.filter((_, index) => index !== indexлюбоеслово));
    // }

    // const addCard = (values: string) => {
    //   setRend([{ name: values, anchor: false }, ...rend]);
    // }

    // const changeValue = (val: string, indik: number) => {
    //   setRend(rend.map((item, index) => index === indik ? { ...item, name: val } : item));
    // }

    // useEffect(() => {
    //   localStorage.setItem('keyValue', JSON.stringify(rend));

    //   const counter = rend.filter(item => item.anchor);
    //   setCount(counter.length);
    // }, [rend]);

    // const countAnchor = (ret: number) => {
    //   setRend(rend.map((item, inde) => inde === ret ? {...item, anchor: !item.anchor} : item));
    // }

    // return (
    //   <div className={styles.app}>
    //     <h1 className={styles.text}>Todo List</h1>
    //     <Input name={rend.length} countInput={count} newCard={addCard}/>
    //     {rend.map((item, ind) => <Card
    //       key={item.name}
    //       delCard={removeCard}
    //       countAnchor={countAnchor}
    //       changeText={changeValue}
    //       name={item.name} index={ind}/>
    //     )}
    //   </div>
    // );

    // const [isVal, setIsVal] = useState(true);
    // const [isStop, setIsStop] = useState(false);

    // const butHide = () => {
    //   setIsVal(prev => !prev);
    // }

    // const errorInter = (bol: boolean) => {
    //   setIsStop(bol);
    // }

  
    return (
        <div>
            {/* <Buttons hide={butHide} butStyle={isVal} stop={errorInter}/>
        {isStop && <span>Error, no further data entry is allowed</span>}
        <ul>
          {mas.map((item, i) =>
            <div key={item.name} className={i % 2 === 0 ? styles.sss : undefined}>
              <li>
                {item.name} 
              </li>
              <div>{isVal ? item.age : item.secondName || item.age } </div>
              
            </div>
          )}
        </ul> */}
            {/* <ImgText /> */}
            {/* <Slaider /> */}
            {/* < Users /> */}
            {/* <TodoList /> */}
            <Posts />
            
        </div>
    );
};

export default App;

// {masCard.map((item, ind) => <Card name={item} index={ind}/>)};
{
    /* <div className={styles.text}>
  <span className={styles.inform}>{'Card 1'}</span>
  <button onClick={handleClick} className={styles.del}>Delete</button>
</div>
<div className={styles.text}>
  <span className={styles.inform}>{'Card 2'}</span>
  <button onClick={handleClick} className={styles.del}>Delete</button>
</div>
<Card name={'Card 3'} index={2}/> */
}
