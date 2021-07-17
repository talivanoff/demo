import styles from './card.module.css';

interface PropsCard {
    url: string;
    id: string;
}

const Card = ({url, id}: PropsCard) => (
    <div className={styles.card}>
        <img src={url} alt=''/>
        <div className={styles.text}>{id}</div>
    </div>
);

export default Card;