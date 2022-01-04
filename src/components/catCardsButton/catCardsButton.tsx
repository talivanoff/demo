import styles from './catCardsButton.module.css';

interface PropsButton {
    request: () => void;
    isDis: boolean;
  }
const CatCardsButton = ({request, isDis}: PropsButton) => {
    
    const handleClick = (e: any) => {
        request(); 
    }

    return (
        <div className={styles.blockInp}>
            <button className={styles.but}
                 disabled={isDis}
                 onClick={handleClick}>LOAD IMAGES</button>
        </div>
    );
};

export default CatCardsButton; 