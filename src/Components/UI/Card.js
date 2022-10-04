import classes from '../UI/Card.module.css';
const Card=(props)=>{
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}

export default Card;