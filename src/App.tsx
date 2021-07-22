import './App.css';
import Header from './new-components/header';
import Main from './new-components/main';
import Image from './components/image'
import { getCards } from './api/cards';
import Butt from './new-components/butt'
import Pictures from './components/pictures/pictures'
import { idText } from 'typescript';
import Inp from './components/link/link';
import React, { useState } from 'react';
import Link from './components/link/link';
// import Budstrap from './components/budstrap/budstrap';
import Input2207 from './new-components/input2207/input2207'


function App() {
    // const [isCount, setIsCount] = useState(false);
    // const names = ['qqqq', 'wwww', 'eeee', 'rrrr', 'tttt' ]
    // const handle = () => {
    //     setIsCount(prev => !prev);
        
    // }

    // const data = [
    //   {
    //     title: 'pic',
    //     description: 'fcgrthyhty vhyyhvythvtyv hbjyujbyub jyuby ybyb rcrgt gtcvh vhbj juju kuyjyv hyhtvyty yjbukukb ujbubt vtubibyujk yujnkuyby vytyuvtvuyt thbjb thjbytjbj ctr',
    //     url: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/detail_9b31eaf4376cdff03e0ba1bcaa826a01.jpg',
    //     button: 'transition',
    //     target: '_blank',
    //     imageLoading: 'Ops!'
    //   },

    //   {
    //     title: 'hors',
    //     description: 'vhjnbn ukknuiuyinl lm,ol,ol,iom nunuinuin niknuikmlum nubbub vybjn kmlmiomio bbtyvhtycr bjyukbnk bykbkybkb bybkybkbykb ybykbkunub vt tvtvt',
    //     url: 'https://s1.1zoom.ru/big0/435/Horses_Sunrises_and_sunsets_532587_1280x720.jpg',
    //     button: 'ok',
    //     target: '_blank',
    //     imageLoading: 'Error'
    //   },

    //   {
    //     title: 'love',
    //     description: 'vhhv vhvh vhhhhbj bjjnk cgcgf fcgcf cdfcf hgbhb jnjnkjn njkjjbj hgvghv cfgcfgxg bhjnjn mkmkj vghgvg hhjnjh bhjnjhn vghgbj hby',
    //     url: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
    //     button: 'good',
    //     target: '_self',
    //     imageLoading: 'No card'
    //   }
    // ]; 
     const [value2, setValue2] = useState(['']);
     const getValue23 = (str: string) => {
      setValue2(pr => {
        const mas = [...pr];
        mas.push(str);
        
        return mas;
      });
}

  return (
    <div className="app">
      {/* <Header />
      <Main /> */}
      {/* < Butt clr='red' width={500} isBorder={true} fontSize={45}/>
      < Butt clr='green' width={100} fontSize={25} isHover={true}/> */}
      {/* {getCards().slice(0,7).map(({url, id}, i)=> < Pictures url={url} name={id} key={id} isButton={i % 2 === 0}/>)} */}
      {/* <Link url={'https:www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&oq=gtht&aqs=chrome.1.69i57j0i1i10i67i131i433j0i1i10l7j46i1i10.3746j0j15&sourceid=chrome&ie=UTF-8'}
            text={'GOOGLE'}
            isHover={true} 
            isAB={!true}/>
 */}

      {/* {getCards().slice(0,5).map((ideert) => <Button text={ideert.id} wid={300} heig={100} key={'id'} isHover col='pink' onCli={handle} />)}
      {names.map((i) => <Button text={i} wid={300} heig={100} key={'id'} isHover col='pink' onCli={handle} />)}
      {isCount && <p>error</p>} */}

      {/* {data.map(({title, description, url, button, target, imageLoading}) =>
       <Budstrap title={title} 
                 description={description}
                 url={url}
                 button={button}
                 target={target}
                 imageLoading={imageLoading}
                 key={url}/>)} */}
                 <Input2207 isNumber/>
                 <br />
                 <Input2207 getValue={getValue23} isIcon />
                 {/* <p>{value2}</p> */}
                 <ul>
                   {value2.map((val) => <li key={val}>{val}</li>)}
                 </ul>
      
    </div>
  );
}

export default App;

