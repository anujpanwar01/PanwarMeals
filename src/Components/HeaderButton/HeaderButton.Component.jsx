import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../../assister/CartIcon";
import classes from "./HeaderButton.module.css";

const HeaderButtonComponent = (props) => {
  const [btnAnimated, setBtnAnimated] = useState(false);

  const { item } = useContext(CartContext);

  const numberOfCartItems = item.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimated && classes.bump}`;

  useEffect(() => {
    if (item.length === 0) return;

    setBtnAnimated(true);

    const Timer = setTimeout(() => {
      setBtnAnimated(false);
    }, 300);

    return () =>
      clearTimeout(() => {
        clearTimeout(Timer);
      });
  }, [item]);

  return (
    <button className={btnClasses} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButtonComponent;
