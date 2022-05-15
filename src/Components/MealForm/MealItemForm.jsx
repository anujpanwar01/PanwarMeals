import { useRef, useContext } from "react";
import InputComponent from "../Input/Input.Component";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";

const MealItemForm = (props) => {
  const { addItem } = useContext(CartContext);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    // addItem();
    const amount = +amountRef.current.value.trim();

    if (amount > 5 || amount < 1) return;

    props.onAddToCart(amount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputComponent
        ref={amountRef}
        id={`amount ${props.id}`}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
        label="Amount"
      />
      <button>+</button>
    </form>
  );
};
export default MealItemForm;
