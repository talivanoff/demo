import styles from './catCardsInput.module.css';
import clsx from 'clsx';

interface PropsInput {
    num: (value: string) => void;
    value: string;
    isError: boolean;
}
const CatCardsInput = ({num, value, isError}: PropsInput) => {
    
    const handleChange = (e: any) => {
        num(e.target.value); 
    }

    return (
        <div className={styles.blockInp}>
            <input className={clsx(styles.inp, isError && styles.inpError)} onChange={handleChange} placeholder='Enter a number' value={value}/>
        </div>
    );
};

export default CatCardsInput; 