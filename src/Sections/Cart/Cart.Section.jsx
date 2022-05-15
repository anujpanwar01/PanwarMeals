import { useContext } from "react";
import ModalComponent from "../../Components/Modal/Modal.Component";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItemComponent from "../../Components/CartItem/CartItem.Component";

const CartSection = (props) => {
  const { item, totalAmount, addItem, removeItem } = useContext(CartContext);
  const total = totalAmount.toFixed(2);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = item.map((item) => (
    <CartItemComponent
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const hasCartItems = item.length > 0;
  const noCartItems = item.length <= 0;

  const NoItem = (
    <div className={classes.actions}>
      <p style={{ textAlign: "left" }}>Your Cart has not any items yet. </p>
      <button className={classes["button--alt-2"]} onClick={props.onClose}>
        close
      </button>
    </div>
  );

  return (
    <ModalComponent onClose={props.onClose}>
      {hasCartItems && (
        <>
          <ul className={classes["cart-items"]}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total Amout</span>
            <span>{+total}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </>
      )}
      {noCartItems && NoItem}
    </ModalComponent>
  );
};

export default CartSection;
