import CartIcon from "../../assister/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButtonComponent = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButtonComponent;
