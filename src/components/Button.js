import '../App.scss';

const Button = ({text,color}) => 
  <button className="card__btn" style={{border: `2px solid ${color}`}}>{text}</button>
export default Button;
    