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
import New2307 from './new-components/new2307/new2307'

const data = [
  {
    title: 'pic',
    description: 'fcgrthyhty vhyyhvythvtyv hbjyujbyub jyuby ybyb rcrgt gtcvh vhbj juju kuyjyv hyhtvyty yjbukukb ujbubt vtubibyujk yujnkuyby vytyuvtvuyt thbjb thjbytjbj ctr',
    url: 'https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/detail_9b31eaf4376cdff03e0ba1bcaa826a01.jpg',
    button: 'transition',
    target: '_blank',
    imageLoading: 'Ops!'
  },

  {
    title: 'hors',
    description: 'vhjnbn ukknuiuyinl lm,ol,ol,iom nunuinuin niknuikmlum nubbub vybjn kmlmiomio bbtyvhtycr bjyukbnk bykbkybkb bybkybkbykb ybykbkunub vt tvtvt',
    url: 'https://s1.1zoom.ru/big0/435/Horses_Sunrises_and_sunsets_532587_1280x720.jpg',
    button: 'ok',
    target: '_blank',
    imageLoading: 'Error'
  },

  {
    title: 'love',
    description: 'vhhv vhvh vhhhhbj bjjnk cgcgf fcgcf cdfcf hgbhb jnjnkjn njkjjbj hgvghv cfgcfgxg bhjnjn mkmkj vghgvg hhjnjh bhjnjhn vghgbj hby',
    url: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
    button: 'good',
    target: '_self',
    imageLoading: 'No card'
  }
];

function App() {
  // const [currentData, setCurrentData] = useState(data);

  // const getDel = (index: number) => {
  //   const newArray = currentData.filter((item, i) => i !== index);
  //   setCurrentData(newArray);
  // }

  return (
    <div className="app">
      {data.map(({title, description ,url, button, imageLoading}) => 
        <New2307 title={title} text={description} url={url} button={button} alt={imageLoading} key={url} />)}
    </div>
  );
}

export default App;

