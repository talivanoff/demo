import { useState, useMemo } from 'react';
import "./humans.css"

import humo from './humo.png';
import visa from './visa.png';
import uzcard from './uzcard.png';
import mastercard from './mastercard.png';
import wallet from './wallet.svg';
import phone from './phone.svg';
import Card from './card';

const Humans = ({tax, title}: {tax?: number; title?: string}) => {
   // const [isDisabled, setDisabled] = useState(true);
   const [phoneValue, setPhoneValue] = useState('');
   const [walletValue, setWalletValue] = useState('');
   const names = [
      {
         name: 'Visa',
         icon: visa,
      },
      {
         name: 'Humo',
         icon: humo,
      },
      {
         name: 'UzCard',
         icon: uzcard,
      },
      {
         name: 'MasterCard',
         icon: mastercard,
      }
   ]

   const handleChange = (event: any) => {
      setPhoneValue(event.target.value);
   }

   const handleChange2 = (event: any) => {
      const {value} = event.target;
      setWalletValue(value);
   }

   // useEffect(() => {
   //    setDisabled(!phoneValue || !walletValue);
   // }, [phoneValue, walletValue]);

   const isDisabled = useMemo(() => !phoneValue || !walletValue, [phoneValue, walletValue]);
   
   return (
   <form className="main">
		<h1> 
         {title || 'Пополнение счёта Humans'}
         </h1>
        <div className="inputs">
            <div className="inputBlock">
                <input name="phone" className="input" value={phoneValue} onChange={handleChange} placeholder="Номер телефона получателя" />
                <img className="phone" src={phone} alt="" />
            </div>
            <div className="inputBlock">
                <input name="wallet" className="input" value={walletValue} onChange={handleChange2} placeholder="Сумма пополнения,UZS" />
                <img className="wallet" src={wallet} alt="" />
            </div>
        </div>
		<div className="info">
			<p> Оплатить картой </p>
			<p className="subTitleInfo">Код подтверждения платежа будет отправлен на номер телефона, привязанный к вашей банковской карте</p>
			<div className="icons">
            {names.map(({ icon, name }) => (
               <Card name={name} icon={icon} />
               // <div className="card" onClick={handleClick}>
               //    <div className={isActiveCard ? "imgBlock iconClick": "imgBlock"}>
               //       <img src={icon} alt="" />
               //    </div>
               //    <p>{name}</p>
               // </div>
            ))}
			</div>
		</div>
		<p>{tax ? tax : 'Комиссия 0%'}</p>
      <button disabled={isDisabled} className={isDisabled ? "button" : "button active"} type="submit">Пополнить счёт</button>
	</form>
 )
}
export default Humans;