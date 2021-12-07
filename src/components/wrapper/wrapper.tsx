import styles from './wrapper.module.css';
import Images from '../images';
import clsx from 'clsx';

const Wrapper = (props: any) => {
    return (
        <div className={styles.conteiner}>
            <div className={clsx(styles.bigText, props.isGreen && styles.greenText)}>
                {props.children}
            </div>
            <Images />
        </div>
    );
};

export default Wrapper;