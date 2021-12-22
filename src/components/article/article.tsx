import styles from './article.module.css';

import { useState} from 'react';


interface ArticleProps {
    names: string;
    prof: string;
    text: string;
    data?: string;
    foto: string;
    website: string;
  }

const Article = ({names,prof, text, data, foto, website}: ArticleProps) => {

    return (
        <a className={styles.link} href={website}>
            <div  className={styles.content}>
                <div className={styles.block}>
                    <div className={styles.namesProf}>
                        <div className={styles.names}>
                            {names}

                        </div>

                        <div className={styles.prof}>
                            {prof}
                        </div>
                    </div>
                    <div className={styles.text}>
                        {text}
                    </div>
                    <div className={styles.blockTime}>

                        {/* {isData && */}
                     {data && <img className={styles.imgTime} src='http://s1.iconbird.com/ico/0612/GooglePlusInterfaceIcons/w128h1281338911586clock.png' />}
                         {/* } */}

                        <div className={styles.time}>
                            {data}
                        </div>
                    </div>
                </div>
                <div className={styles.foto}>
                    <img className={styles.foto} src={foto} />
                </div>    
            </div>
        </a>
        
    );
};

export default Article;