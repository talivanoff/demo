import clsx from 'clsx';
import styles from './alwaysAndEverywhere.module.css';

interface AAEProps {
    title: string;
    textBtn?: string;
    site?: string;
    children?: any;
    styleBlock?: any;
  }

const AlwaysAndEverywhere = ({title, textBtn, site, children, styleBlock}: AAEProps) => (
    <div className={styleBlock ? clsx( styles.block, styles.styleBlock) : styles.block}>
        <div className={styles.title}>
            {title}
        </div>
        {children}
        {site && <a className={styles.btn} href={site} >{textBtn}</a>}
    </div>    
);

export default AlwaysAndEverywhere;