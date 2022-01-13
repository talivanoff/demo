import Input from './components/input';
import Card from './components/card';
import clsx from 'clsx';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import Buttons from './js/buttons';
import ImgText from './js/imgText/imgText';
import Slaider from './js/slaider/slaider';
import Users from './js/users';
import InputTest from './components/inputTest';
import TodoList from './components/todoList';
import Posts from './components/posts';
import Media from './components/media';
import Slider from './components/slider';
import Text from './components/text';
import Text2 from './components/text2';
import Authorization from './components/authorization';
import HumansLang from './components/humansLang';
import Grids from './components/grids';
import HumansCash from './components/humansCash';
import UserFoto from './components/userFoto';
import DealerHumans from './components/dealerHumans';
import {Routes, Route, Link} from 'react-router-dom';
import AddUser from './components/addUser';
import DeleteUser from './components/deleteUser';
import Article from './components/article';
import AlwaysAndEverywhere from './components/alwaysAndEverywhere';
import Snowfall from 'react-snowfall';
import Fhby from './components/fhby';
import CatCardsHeader from './components/catCardsHeader';
import CatCardsInput from './components/catCardsInput';
import CatCardsButton from './components/catCardsButton';
import CatCards from './components/catCards';
import ModalComp from './components/modalComp';
import ModalComponent from './components/modalComponent';


// interface MasProps {
//   url: string;
//   id: string;
// }
const App = () => {

  
    // const cards = JSON.parse(localStorage.getItem('keyValue') as string) as Array<{ name: string; anchor: boolean}>;
    // const [rend, setRend] = useState(cards?.length ? cards : masCard);
    // const [count, setCount] = useState<number>(0);
    // const removeCard = (indexлюбоеслово: number) => {
    //   setRend(rend.filter((_, index) => index !== indexлюбоеслово));
    // }

    // const addCard = (values: string) => {
    //   setRend([{ name: values, anchor: false }, ...rend]);
    // }

    // const changeValue = (val: string, indik: number) => {
    //   setRend(rend.map((item, index) => index === indik ? { ...item, name: val } : item));
    // }

    // useEffect(() => {
    //   localStorage.setItem('keyValue', JSON.stringify(rend));

    //   const counter = rend.filter(item => item.anchor);
    //   setCount(counter.length);
    // }, [rend]);

    // const countAnchor = (ret: number) => {
    //   setRend(rend.map((item, inde) => inde === ret ? {...item, anchor: !item.anchor} : item));
    // }

    // return (
    //   <div className={styles.app}>
    //     <h1 className={styles.text}>Todo List</h1>
    //     <Input name={rend.length} countInput={count} newCard={addCard}/>
    //     {rend.map((item, ind) => <Card
    //       key={item.name}
    //       delCard={removeCard}
    //       countAnchor={countAnchor}
    //       changeText={changeValue}
    //       name={item.name} index={ind}/>
    //     )}
    //   </div>
    // );

    // const [isVal, setIsVal] = useState(true);
    // const [isStop, setIsStop] = useState(false);

    // const butHide = () => {
    //   setIsVal(prev => !prev);
    // }

    // const errorInter = (bol: boolean) => {
    //   setIsStop(bol);
    // }

  //  const masArt = [
  //    {
  //     names: 'Михаил Грачёв', 
  //     prof: 'финансовый консультант', 
  //     text: 'Прогноз по валютам: как изменятся курсы в обменниках накануне Рождества',
  //     // data: '20.12',
  //     foto: 'https://myfin.by/source/1/1cVockPPPdUTID9bbFrcmmTax5S2YnKk.png',
  //     website: 'https://myfin.by/stati/view/prognoz-po-valutam-kak-izmenatsa-kursy-v-obmennikah-nakanune-rozdestva',
  //    },

  //    {
  //     names: 'Трофим Ерёменко', 
  //     prof: 'криптовалютный эксперт', 
  //     text: 'Когда снова оживёт рынок криптовалют и биткоин пойдёт в рост? Мнение эксперта',
  //     data: '17.12',
  //     foto: 'https://myfin.by/source/1/aMwKBiF7ZHqqoR_MSzxbZMsE-kjifGFJ.png',
  //     website: 'https://myfin.by/stati/view/kogda-snova-ozivet-rynok-kriptovalut-i-bitkoin-pojdet-v-rost-mnenie-eksperta',
  //    },  

  //    {
  //     names: 'Вадим Иосуб', 
  //     prof: 'старший аналитик компании "Альпари"', 
  //     text: 'Прогноз по валютам: российский рубль востанавливается, а что будет с долларом и евро',
  //     // data: '06.12',
  //     foto: 'https://myfin.by/source/1/TaAtPd1ohgtxB04ly6QJiM4AJcfYhXqJ.png',
  //     website: 'https://myfin.by/stati/view/prognoz-po-valutam-rossijskij-rubl-vosstanavlivaetsa-a-cto-budet-s-dollarom-i-evro',
  //    },

  //    {
  //     names: 'Катерина Борнукова', 
  //     prof: 'эксперт образовательного центра BEROC', 
  //     text: 'Ввели новые санкции - что будет с рублём и экономикой? Объясняет эксперт',
  //     data: '03.12',
  //     foto: 'https://myfin.by/source/1/PBWsos4kPgqIx9n2R1j5En6qrk6BWvBX.png',
  //     website: 'https://myfin.by/stati/view/vveli-novye-sankcii-cto-budet-s-rublem-i-ekonomikoj-obasnaet-ekspert',
  //    }
  //  ];

  // const [mas, setMas] = useState<MasProps[]>([]);
  // const[numQuantity, setNumQuantity] = useState('');
  // const[isError, setIsError] = useState(false);

  // const fetchRequest = () => {
  //   fetch(`https://api.thecatapi.com/v1/images/search?limit=${numQuantity ? numQuantity : 10}`)
  //             .then((data) => data.json())
  //             .then((result) => {
  //                 setMas(result)
  //             });
  // }

  // const disableBut = (num: string) => {
  //   if(+num > 0 || num === '') {
  //       setIsError(false);
  //     } else {
  //       setIsError(true);
  //   }
  // }

  // useEffect(() => {
  //   fetchRequest();
  // }, []);

  // const quantity = (num: string) => {
  //   setNumQuantity(num);
  //   disableBut(num);
  // };
 
  // const requestServer = () => {
  //   setNumQuantity('');
  //   fetchRequest();
  // };

  return (
        <div>

          <ModalComponent />
          {/* <CatCardsHeader />
          <div className={styles.inpBut}> 
              <CatCardsInput num={quantity} value={numQuantity} isError={isError} />
              <CatCardsButton request={requestServer} isDis={isError || numQuantity === ''} />
           </div> 
          <div className={styles.blockCards}> 
              <CatCards masCards={mas} />
          </div> */}
          
          {/* <Fhby /> */}
           {/* <Snowfall
              color="blue"
              snowflakeCount={2000}
           />
           <div className={styles.cont}>
              <AlwaysAndEverywhere title='Снятие наличных'  styleBlock='styleBlock'>
                    <div className={styles.childs}>
                         Снять деньги с карты Humans можно в любом банкомате мира с логотипом VISA в той
                         валюте, которая доступна в конкретном банкомате.
                    </div>
              </AlwaysAndEverywhere>                    
              <AlwaysAndEverywhere title='Всегда и везде' site='https://www.youtube.com/' textBtn="Подробнее">
                    <div className={styles.childs}>
                         Если в вашем телефоне установлена SIM-карта Humans, вы получите неограниченный
                         доступ к своим деньгам. Приложение 
                         <a className={styles.links} href='https://humans.uz/ru/'> HUMANS.uz </a> 
                         будет работать в любой стране мира, даже если на счете нет денег или не подключены
                         услуги связи. В этом случае приложение не расходует трафик – вы можете пользоваться
                         им бесплатно.
                    </div>
              </AlwaysAndEverywhere>
           </div> */}
          {/* <h1 className={styles.title}>Мнения</h1>
          <div className={styles.arts}>    

            {masArt.map(({names, prof, text, data, foto, website}) => <Article names={names} 
                                                                               prof={prof} 
                                                                               text={text}
                                                                               data={data}
                                                                               foto={foto}
                                                                               website={website}
                                                                               key={`$(website) $(text)`}
                                                                               />)}

          </div>
          {/* <header className={styles.homeBlock}>
            <Link className={styles.homeText} to='/'>Home</Link>
            <Link className={styles.homeText} to='addUser'>Added users</Link>
            <Link className={styles.homeText} to='/deleteUser'>Remote users</Link>
          </header>
          <Routes>
             <Route path='/' element={<UserFoto />}/>
             <Route path='/addUser' element={<AddUser />}/>
             <Route path='/deleteUser' element={<DeleteUser />}/>
          </Routes> */}
          {/* <DealerHumans /> */}
          {/* <HumansLang /> */}     
          {/* <HumansCash /> */}
          {/* <Grids /> */}
           {/* <Slider /> */}
           {/* <Text />
           <Text2 /> */}
           {/* <Authorization /> */}
            {/* <Buttons hide={butHide} butStyle={isVal} stop={errorInter}/>
        {isStop && <span>Error, no further data entry is allowed</span>}
        <ul>
          {mas.map((item, i) =>
            <div key={item.name} className={i % 2 === 0 ? styles.sss : undefined}>
              <li>
                {item.name} 
              </li>
              <div>{isVal ? item.age : item.secondName || item.age } </div>
              
            </div>
          )}
        </ul> */}
            {/* <ImgText /> */}
            {/* <Slaider /> */}
            {/* < Users /> */}
            {/* <TodoList /> */}
            {/* <Posts /> */}
            {/* <Media /> */}
           
        </div>
    );
};

export default App;

// {masCard.map((item, ind) => <Card name={item} index={ind}/>)};
{
    /* <div className={styles.text}>
  <span className={styles.inform}>{'Card 1'}</span>
  <button onClick={handleClick} className={styles.del}>Delete</button>
</div>
<div className={styles.text}>
  <span className={styles.inform}>{'Card 2'}</span>
  <button onClick={handleClick} className={styles.del}>Delete</button>
</div>
<Card name={'Card 3'} index={2}/> */
}
// const mas = [
//   {
//       name: 'fgfg',
//       secondName: 'rrrr',
//       age: 12,
//   },
//   {
//       name: 'aaa',
//       secondName: 'rrrr',
//       age: 14,
//   },
//   {
//       name: 'bbb',
//       age: 17,
//   },
//   {
//       name: 'cccc',
//       secondName: 'rrrr',
//       age: 16,
//   },
// ];
