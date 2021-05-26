import './Button.css';

interface ButtonProps {
    title: string;
    handleClick: (event: any) => void;
}

const Button = ({handleClick, title}: ButtonProps) =>  (
    <button className="button" onClick={handleClick}>{title}</button>
)

export default Button;



// const Button = () =>  (
//     const handleClick = () => {};

//     <button className="button" onClick={handleClick}>Title</button>
// )
