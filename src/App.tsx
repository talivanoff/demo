
import Header from './new-components/header';
import Main from './new-components/main';
import Image from './components/image'
import { getCards } from './api/cards';
import Butt from './new-components/butt'
import Pictures from './components/pictures/pictures'
import { idText, isNamespaceExport } from 'typescript';
import Inp from './components/link/link';
import React, { useState } from 'react';
import Link from './components/link/link';
// import Budstrap from './components/budstrap/budstrap';
import Input0208 from './new-components/input0208/input0208'
import New2307 from './new-components/new2307/new2307'
import Todo from './new-components/Todo/todo'
import clsx from 'clsx';
import styles from './App.module.css';
import InBut from './new-components/inBut/inBut';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useForm } from "react-hook-form";
import A from './new-components/buttonA/buttonA'


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

// const array = ['java script', 'pyhton', 'angular', 'react', 'css'];

// const users2 = [
//   {login: 'Ivanov',
//   password: '12345678'},

//   {login: 'Petrov',
//   password: '155665678'},

//   {login: 'Ivashka',
//   password: '12345566'},

//   {login: 'Nadin',
//   password: '165555678'},
  
//   {login: 'Inev',
//   password: '123443478'}
// ]

// //  localStorage.setItem ("users", JSON.stringify(users2));

function App() {
//   const [isError, setIsError] = useState(false);
//   const [isOk, setIsOk] = useState(false);
//   const [data, setData] = useState({
//     login: '',
//     email: '',
//     password: '',
//   });
//   const [dataReg, setDataReg] = useState({
//     login2: '',
//     email2: '',
//     password2: '',
//   });
//   const users = JSON.parse(localStorage.getItem("users") || '') || {};

//   const handleClick = (e: any) => {
//     e.preventDefault();
//     setIsError(true);
//     // for(let i = 0; i < users.length; i++) {
//     //   if (data.login === users[i].login && data.password === users[i].password) {
//     //     setIsOk(true)
//     //   } 

//     // }

//     users.forEach(({login, password}: { login: string; password: string }) => {
//       if (data.login === login && data.password === password) {
//         setIsOk(true)
//       } 
//     })
//   };

//   const handleChange = (inputName: string, inputValue: string) => {
//     setData(prev => {
//       return {
//         ...prev,
//         [inputName]: inputValue,
//       }
//     })
//   }

//   const handleChangeRegistration = (inputName: string, inputValue: string) => {
//     setDataReg(prev => {
//       return {
//         ...prev,
//         [inputName]: inputValue,
//       }
//     })
//   }

//   const handleClickRegistration = () => {
//     const newUsers = [
//       ...users, 
//       {
//         login: dataReg.login2,
//         email: dataReg.email2,
//         password: dataReg.password2,
//       }
//     ];

//     localStorage.setItem("users", JSON.stringify(newUsers));
//   }

// const mas = [
//   {names: '111', palitra: 'green'},
//   {names: '222', palitra: 'blue', isClick: true},
//   {names: '333', palitra: 'pink', isClick: true},
//   {names: '444', palitra: 'red'},
// ];

//   // const [isOk, setIsOk] = useState(false);
//   const [rk, setRk] = useState(mas);
//   const yyy = (i: number) => {
//       // setIsOk(prev => !prev);
//       setRk(re => re.filter((item, index) => index !== i));
//   }
//   const zzz = (i: number) => {
//       const copy = rk.filter((item, index) => index === i);
//       setRk(re => [...re, copy[0]]);
// }

const mas = [ 
  {day: 90, prise: 5000, min: 90, sale: 13},
  {day: 180, prise: 10000, min: 180, sale: 21},
  {day: 360, prise: 20000, min: 360, sale: 35},
];

  return (
//     <>
//       {!isOk && 
//         <>
//           <div className={styles.app}>
//             <h1 className={styles.h1}>Sign Up</h1>
//             <a className={styles.a} href="#">Have an account?</a>
//             <form className={styles.form} onSubmit={handleClick}>
//               <Input0208 onChange={handleChange} name="login" placeholder='Username'/>
//               <Input0208 onChange={handleChange} name="email" type="email" placeholder='Email'/>
//               <Input0208 onChange={handleChange} name="password" type="password" placeholder='Password'/>
//               <button type="submit" className={styles.button}>Sign In</button>
//             </form>
//           </div>
//           {isError && <h2 className={styles.h2}> There is no such user </h2>}
//         </>
//       }
//       {isOk && <h2> You logged in under the name {data.login} </h2>}
//       <div className={styles.registration}>
//         <h1>Registration</h1>
//         <form className={styles.form} onSubmit={handleClickRegistration}>
//               <Input0208 onChange={handleChangeRegistration} name="login2" placeholder='Username'/>
//               <Input0208 onChange={handleChangeRegistration} name="email2" type="email" placeholder='Email'/>
//               <Input0208 onChange={handleChangeRegistration} name="password2" type="password" placeholder='Password'/>
//               <button type="submit" className={styles.button}>Registration</button>
              // <div>
              //   {rk.map((item, index) =>
              //     <A text={item.names} colr={item.palitra} 
              //       textVision={item.isClick ? yyy : zzz} ind={index} />  
              //   )}
              //   {isOk && <h1>rrrrrrrrrrrrrrrrrrr</h1>}
              // </div>
//             </form>
//       </div
      <>
        {mas.map(item => <A key={item.prise} d={item.day} p={item.prise} m={item.min} s={item.sale} /> )}
      </>
  );
 }

//  const mas = {
//   names: 'rtrt'
//  }

export default App;

