import classes from "./Card.module.css";
/*CSS modules: we use template literals to apply two classes-> card class and the class coming as a prop from AddUser*/
function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
