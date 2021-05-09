import { useState } from 'react';
import "./humans.css"

const Card = ({ name, icon }: any) => {
    const [isActiveCard, setActiveCard] = useState(false);

    const handleClick = (event: any) => {
     setActiveCard(!isActiveCard);
   }

    return (
        <div className="card" onClick={handleClick}>
            <div className={isActiveCard ? "imgBlock iconClick": "imgBlock"}>
                <img src={icon} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Card;