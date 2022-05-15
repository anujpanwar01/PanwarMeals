import { useContext } from "react";
import MealItemForm from "../MealForm/MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCart = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };
    addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.name} onAddToCart={addItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
