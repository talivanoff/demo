
import clsx from 'clsx';
import styles from './cellScroll.module.css';

interface CellProps {
     title: string;
     src: string;
     cellBack?: string;
  }

const CellScroll = ({title, src, cellBack}: CellProps) => {

    return (
        <div className={clsx(styles.blockCell, cellBack && styles[cellBack])}>
            <img className={styles.imges} src={src} />
            <div className={styles.titleBlock}>
                {!cellBack && <img className={styles.titleImges} src='https://svgsilh.com/svg/1837436-ffffff.svg'/>}
                <div className={styles.title}>{title}</div>
            </div>
            
        </div>
    );
};

export default CellScroll;