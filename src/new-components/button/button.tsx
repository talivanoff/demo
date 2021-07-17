import styles from './button.module.css';

interface PropsButton {
    onClick: () => void;
}

const Button = ({onClick}: PropsButton) => {
    const handleClick = () => {
        onClick();
    }

    return(
        <button className={styles.button} onClick={handleClick}>Загрузить изображения</button>
    );

} 

export default Button;