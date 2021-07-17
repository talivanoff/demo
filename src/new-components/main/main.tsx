import { useState } from 'react';
import styles from './main.module.css';
import Input from '../input';
import Button from '../button';
import Card from '../card';
import { getCards }from '../../api/cards'

const Main = () => {
    const cards = getCards();
    const [countCards, setCountCards] = useState(0);
    const [currentCards, setCurrentCard] = useState([]);
    const updateCountCards = (count: number) => {
        setCountCards(count);
    }

    const updateCurrentCards = () => {
        setCurrentCard(cards.slice(0, countCards) as any);
    }

    return (
        <div className={styles.main}>
            <div className={styles.search}>
                <Input onChange={updateCountCards}/>
                <Button onClick={updateCurrentCards} />
            </div>
            <div className={styles.cards}>
               {currentCards.map(({url, id}) => <Card url={url} id={id} key={id}/>)}
             </div>
        </div>
    );
}

export default Main;