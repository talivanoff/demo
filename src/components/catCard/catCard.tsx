import styles from './catCard.module.css';

interface PropsCatCard {
    url: string;
    names: string;
}

const CatCard = ({url, names}: PropsCatCard) => {
    
    return (
        <div className={styles.blockCatCard}>
            <img className={styles.pic} src={url} alt='Cat card'/>
            <div className={styles.text}>Cat id: {names}</div>
        </div>
    );
};

export default CatCard; 