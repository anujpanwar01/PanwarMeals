import classes from "./Card.module.css";

const CardComponent = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
export default CardComponent;
