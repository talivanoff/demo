import styles from './catCards.module.css';
import CatCard from '../catCard';

interface PropsCatCards {
    masCards: MasProps[];
}

interface MasProps {
    url: string;
    id: string;
}

const CatCards = ({masCards}: PropsCatCards) => {
   
    return (
        <div className={styles.blockCatCards}>
           {masCards.map(({url, id}) => <CatCard key={url} names={id} url={url} />)}
        </div>
    );
};

export default CatCards; 

