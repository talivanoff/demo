import React from 'react';
import styles from './youTubeComp.module.css';
import YouTubeCard from '../youTubeCard';


const YouTubeComp = () => {

    return (
        <div className={styles.block}>
            <div className={styles.content}>
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
            </div>
        </div>
    );
};

export default YouTubeComp;