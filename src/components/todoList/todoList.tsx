import { SyntheticEvent, useState, useEffect, useRef } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './todoList.module.css';

interface TodosProps {
    title: string;
    completed: boolean;
    userId?: number;
    id?: number;
}

const TodoList = () => {
    const [mas, setMas] = useState<TodosProps[]>([] as TodosProps[]);
    const [val, setVal] = useState('');
    const inputRef = useRef<any>();
    const [isLS, setIsLS] = useState(false);

    useEffect(() => inputRef.current.focus(), []);

    const handleClick = (i: number) => {
        setMas(
            mas.map((item: TodosProps, index: number) =>
                index === i ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const addTodo = () => {
        if (val !== '') {
            setMas([{ title: val, completed: false }, ...mas]);
            setVal('');
        }
    };

    const butDel = (index: number) => {
        setMas(
            mas.filter((item: TodosProps, i: number) => index !== i && item)
        );
    };

    const handleChange = (e: any) => {
        if(e.target.value.length <=30) {
            setVal(e.target.value);
        }
    };

    const addLS = () => {
        localStorage.setItem('Todos',JSON.stringify(mas));
        setIsLS(true);
       
        setTimeout(() => {
            setIsLS(false);
        },4000)
    }

    return (
        <>
            <div className={styles.enter}>
                <input
                    onChange={handleChange}
                    className={styles.inputs}
                    value={val}
                    ref={inputRef}
                />
                <button
                    onClick={addTodo}
                    className={clsx(styles.btn, styles.btnAdd)}
                >
                    Add
                </button>
            </div>
            {mas.map((item: TodosProps, index: number) => (
                <div className={styles.block} key={item.title}>
                    <div>
                        <input
                            onClick={() => handleClick(index)}
                            className={styles.inp}
                            type="checkbox"
                            checked={item.completed}
                        ></input>
                        <span
                            className={
                                item.completed ? styles.span2 : styles.span
                            }
                        >
                            {item.title}
                        </span>
                    </div>
                    <button
                        onClick={() => butDel(index)}
                        className={clsx(styles.btn, styles.btnDelite)}
                        disabled={!item.completed}
                    >
                        Delite
                    </button>
                </div>
                
            ))}
            <div>
            <button
                onClick={addLS}
                className={clsx(styles.btn, styles.btnSave)}> Save </button>
            </div>
            {isLS && <p>ADD IN LOCALSTORAGE</p>}
        </>
    );
};

export default TodoList;
