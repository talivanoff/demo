import './Input.css'

export interface InputProps {
    inputValue: number;
    handleInputChange: (event: any) => void;
}

const Input = ({inputValue, handleInputChange}: InputProps) => (
    <input className="input" type="number" value={inputValue} onChange={handleInputChange} />
)

export default Input;