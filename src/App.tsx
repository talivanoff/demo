
import Input from './components/input';
import Card from './components/card';
import clsx from 'clsx';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

const masCard = ['Card 1', 'Card 2', 'Card 3'];

const App = () => {
  const cards = JSON.parse(localStorage.getItem('keyValue') as string) as Array<string>;
  const [rend, setRend] = useState(cards.length ? cards : masCard);
  const removeCard = (indexлюбоеслово: number) => {
    setRend(rend.filter((item, index) => index !== indexлюбоеслово));
  }

  const addCard = (values: string) => {
    setRend([values, ...rend]);
  }

  const changeValue = (val: string, indik: number) => {
    setRend(rend.map((item, index) => index === indik ? val : item));
  }

  useEffect(() => {
    localStorage.setItem('keyValue', JSON.stringify(rend));
  }, [rend]);

  return (
    <div className={styles.app}>
      <h1 className={styles.text}>Todo List</h1>
      <Input newCard={addCard}/>
      {rend.map((item, ind) => <Card key={item} delCard={removeCard} changeText={changeValue} name={item} index={ind}/>)}  

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