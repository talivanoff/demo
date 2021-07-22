import clsx from 'clsx';
import styles from './budstrap.module.css';
// import React, { useState } from 'react';

// type TargetProps =  '_blank' | '_self';

interface PropsCard {
    title: string,
    description: string,
    url: string,
    button: string,
    target: string,
    imageLoading: string,
}


const Budstrap = ({title, description, url, button, target, imageLoading}: PropsCard) => {
    return(
        <div className={styles.header}>
            <img className={styles.picture} src={url} alt={imageLoading} />
            <div className={styles.text}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <a className={styles.but} target={target} href={url}>{button}</a>
        </div>

    ) 
}
export default Budstrap;