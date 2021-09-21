
import Input from './components/input';
import Card from './components/card';
import clsx from 'clsx';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

const masCard = [
  {name: 'Card 1', anchor: false},
  {name: 'Card 2', anchor: false},
  {name: 'Card 3', anchor: false}  
];

const App = () => {
  const cards = JSON.parse(localStorage.getItem('keyValue') as string) as Array<{ name: string; anchor: boolean}>;
  const [rend, setRend] = useState(cards?.length ? cards : masCard);
  const [count, setCount] = useState<number>(0);
  const removeCard = (indexлюбоеслово: number) => {
    setRend(rend.filter((_, index) => index !== indexлюбоеслово));
  }

  const addCard = (values: string) => {
    setRend([{ name: values, anchor: false }, ...rend]);
  }

  const changeValue = (val: string, indik: number) => {
    setRend(rend.map((item, index) => index === indik ? { ...item, name: val } : item));
  }

  useEffect(() => {
    localStorage.setItem('keyValue', JSON.stringify(rend));

    const counter = rend.filter(item => item.anchor);
    setCount(counter.length);
  }, [rend]);

  
  const countAnchor = (ret: number) => {
    setRend(rend.map((item, inde) => inde === ret ? {...item, anchor: !item.anchor} : item));
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.text}>Todo List</h1>
      <Input name={rend.length} countInput={count} newCard={addCard}/>
      {rend.map((item, ind) => <Card
        key={item.name}
        delCard={removeCard}
        countAnchor={countAnchor}
        changeText={changeValue}
        name={item.name} index={ind}/>
      )}  
    </div>
  );
}



export default App;


// {masCard.map((item, ind) => <Card name={item} index={ind}/>)}; 
{/* <div className={styles.text}>
  <span className={styles.inform}>{'Card 1'}</span>
  <button onClick={handleClick} className={styles.del}>Delete</button>
</div>
<div className={styles.text}>
  <span className={styles.inform}>{'Card 2'}</span>
  <button onClick={handleClick} className={styles.del}>Delete</button>
</div>
<Card name={'Card 3'} index={2}/> */}