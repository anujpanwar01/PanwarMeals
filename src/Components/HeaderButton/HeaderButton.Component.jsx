import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../../assister/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButtonComponent = (props) => {
  const { item } = useContext(CartContext);

  const numberOfCartItems = item.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButtonComponent;
