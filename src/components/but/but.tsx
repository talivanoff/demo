import './but.css';

interface Props {background?: string, title?: string, click: any }

const But = ({background, title = 'black', click}: Props) =>  
(
    <button style={{background: background}} onClick={click} className="button">{title}</button>
)

export default But;
