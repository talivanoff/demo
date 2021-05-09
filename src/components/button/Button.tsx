import './Button.css';

export interface ButtonProps {
    title: string;
    handleClick: (event: any) => void;
}

const Button = ({handleClick, title}: ButtonProps) =>  (
    <button className="button" onClick={handleClick}>{title}</button>
)

export default Button;