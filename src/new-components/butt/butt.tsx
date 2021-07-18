import styles from './butt.module.css';
import clsx from 'clsx';

interface PropsColor{
    clr: string;
    width: number;
    isBorder?: boolean;
    fontSize: number;
    isHover?: boolean;
}


const Butt = ({clr, width, isBorder = false, fontSize, isHover}: PropsColor) => {
    return (
        <div >
            <button className={clsx(styles.button, isBorder && styles.border, isHover &&  styles.shadow)} 
                    style={{ background: clr, width: width, fontSize: fontSize}}>btn</button>
        </div>
    );

} 


export default Butt;