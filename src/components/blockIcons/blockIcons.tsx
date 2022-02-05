import styles from './blockIcons.module.css';
import BlockRow from '../blockRow';
import React, { useMemo, useState } from 'react';

const masData=[
    {
        title: 'SMS',
        coefSum: 7000,
        masIcons: [
          { urlIcon: '/images2/sms.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Безлимитные sms'
          }
        ]
    },
    {
        title: 'Мессенджеры',
        coefSum: 7000,
        masIcons: [
          { urlIcon: '/images2/we-chat.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Wichat'
          },
          { urlIcon: '/images2/whats-app.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'WhatsApp'
          },
          { urlIcon: '/images2/imo.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'IMO'
          }
        ] 
    },
    {
        title: 'Соцсети',
        coefSum: 10000,
        masIcons: [
          { urlIcon: '/images2/vk.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Vk'
          },
          { urlIcon: '/images2/classmates.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Odnoklassniki'
          },
          { urlIcon: '/images2/facebook.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Facebook'
          },
          { urlIcon: '/images2/instagram.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Instagram'
          },
          { urlIcon: '/images2/tik-tok.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'TikTok'
          }
        ]
    },
    {
        title: 'Музыка',
        coefSum: 12000,
        masIcons: [
          { urlIcon: '/images2/yandex-music.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Yandex Musik'
          },
          { urlIcon: '/images2/shazam.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Shazam'
          },
          { urlIcon: '/images2/apple-music.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Apple Music'
          },
          { urlIcon: '/images2/spotify.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Spotify'
          }
        ]
    },
    {
        title: 'Видео',
        coefSum: 15000,
        masIcons: [
          { urlIcon: '/images2/youtube.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Youtube'
          },
          { urlIcon: '/images2/twitch.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Twitch'
          },
          { urlIcon: '/images2/zoom.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Zoom'
          },
          { urlIcon: '/images2/tas-ix.svg',
            urlOk: '/images2/ok.svg',
            nameIcon:'Tas-IX'
          }
        ]
    },
]



const BlockIcons = () => {
    
    const [sumMas, setSumMas] = useState(Array(masData.length).map(item => 0));
    const changeSumBlock = (sum: number, index: number) => {
      setSumMas(prev => {
        const sumMasCopy = [...prev];
        sumMasCopy[index] = sum;
        return sumMasCopy; 
      });
    }

    const sumBlock = useMemo(()=>sumMas.reduce((a,b)=>a+b,0), [sumMas]);
    
    return (
      <div className={styles.blockWind}>
        <div className={styles.blockContent}>
            {masData.map((item, ind) => ( 
              <BlockRow key={item.title} { ...item} changeSumBlock={changeSumBlock} index={ind} />
            ))}
            <div className={styles.sum}>Сумма: {sumBlock} UZS</div>
        </div>
      </div>
    );
};

export default BlockIcons; 


