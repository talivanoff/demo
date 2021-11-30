import { SyntheticEvent, useState, useEffect, useRef } from 'react';
import { setConstantValue } from 'typescript';
import clsx from 'clsx';
import styles from './posts.module.css';

interface TodosProps {
    title: string;
    completed: boolean;
    userId?: number;
    id?: number;
}

const Posts = () => {
    const [title, setTitle] = useState('');
    const [valBody, setValBody] = useState('');
    const [valUserId, setValUserId] = useState('');

    const handleChangeTitle = (e: any) => {
        setTitle(e.target.value);
    };

    const handleChangeBody = (e: any) => {
        setValBody(e.target.value);
    };

    const handleChangeUserId = (e: any) => {
        setValUserId(e.target.value);
    };

    const handleClickSend = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body: valBody,
                userId: valUserId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    const handleClickPatchingTitle = () => {
        if (valBody === '' && valUserId === '' && title) {
            fetch('https://jsonplaceholder.typicode.com/posts/2', {
                method: 'PATCH',
                body: JSON.stringify({
                    title,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
    };
    return (
        <>
            <div className={styles.enter}>
                <input
                    onChange={handleChangeTitle}
                    className={styles.inputs}
                    value={title}
                    placeholder="title"
                />
                <input
                    onChange={handleChangeBody}
                    className={styles.inputs}
                    value={valBody}
                    placeholder="body"
                />
                <input
                    onChange={handleChangeUserId}
                    className={styles.inputs}
                    value={valUserId}
                    placeholder="user id"
                />
                <button onClick={handleClickSend} className={styles.btn}>
                    Send
                </button>
                <button
                    onClick={handleClickPatchingTitle}
                    className={styles.btn}
                >
                    PatchingTitle
                </button>
            </div>
        </>
    );
};

export default Posts;
