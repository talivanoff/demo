import React from 'react';
import styles from './youTubeComp.module.css';
import YouTubeCard from '../youTubeCard';


const YouTubeComp = () => {

    return (
        <div className={styles.block}>
            <div className={styles.content}>
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((item) => <YouTubeCard key={item} />)}
               {/* <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard />
               <YouTubeCard /> */}
            </div>
        </div>
    );
};

export default YouTubeComp;