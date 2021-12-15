import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './context.module.css';

interface ContextProps {
     title: string;
  }

const Context = ({title}: ContextProps) => {

    return (
        <div className={styles.imgText}>
            <img className={styles.imges} src='https://humans.uz/static/resources/icons/f1edb4222663ec4e4194c1b329971438/ok-icon.svg' />
            <div>{title}</div>
        </div>
    );
};

export default Context;