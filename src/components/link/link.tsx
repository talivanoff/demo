import styles from './link.module.css';
import clsx from 'clsx';


export interface LinkProps {
    url: string;
    text: string;
    isHover?: boolean;
    isAB: boolean;
}

const Link = ({url, text, isHover, isAB}: LinkProps) => {
    
    return(
        <>
         {isAB ? <a className={clsx(styles.a, isHover && styles.borderGreen)} href={url}>{text}</a> :
          <button className={styles.button}>push</button>}
        </>   
    )
 }
export default Link;