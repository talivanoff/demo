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
import Link from './components/link/link'

function App() {
  return (
    <div className="app">
      {/* <Header />
      <Main /> */}
      {/* < Butt clr='red' width={500} isBorder={true} fontSize={45}/>
      < Butt clr='green' width={100} fontSize={25} isHover={true}/> */}
      {/* {getCards().slice(0,7).map(({url, id}, i)=> < Pictures url={url} name={id} key={id} isButton={i % 2 === 0}/>)} */}
      <Link url={'https:www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&oq=gtht&aqs=chrome.1.69i57j0i1i10i67i131i433j0i1i10l7j46i1i10.3746j0j15&sourceid=chrome&ie=UTF-8'}
            text={'GOOGLE'}
            isHover={true} 
            isAB={!true}/>


      
    </div>
  );
}

export default App;

