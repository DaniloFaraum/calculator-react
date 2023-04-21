import './Button.css'

interface ButtonProps {
    symbol: string;
    style?: string;
    onClick?: (e: any) => void;
  }
  
  export const Button = (props: ButtonProps) => {
    return (
      <button id={props.symbol} onClick={props.onClick} className={props.style}>
        {props.symbol}
      </button>
    );
  };
  