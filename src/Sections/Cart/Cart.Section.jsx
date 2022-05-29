import React, { useContext, useState } from "react";
import ModalComponent from "../../Components/Modal/Modal.Component";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItemComponent from "../../Components/CartItem/CartItem.Component";

import OrderItemsComponent from "../../Components/OrderItems/OrderItems.component";
const CartSection = (props) => {
  const [isOrder, setIsOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { item, totalAmount, addItem, removeItem, submitItems } =
    useContext(CartContext);
  const total = totalAmount.toFixed(2);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const orderItems = () => setIsOrder(true);

  const submitOrderHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      await fetch(
        "https://panwar-meals-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: userData, orderItems: item }),
        }
      );
    } catch (err) {
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    submitItems();
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

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        close
      </button>
      <button className={classes.button} onClick={orderItems}>
        Order
      </button>
    </div>
  );

  const isSubmittingModalContent = <p>Sending order deatils...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      {" "}
      <p>Successfully send the order</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          close
        </button>
      </div>
    </React.Fragment>
  );

  const cartModalContent = (
    <React.Fragment>
      {hasCartItems && (
        <React.Fragment>
          <ul className={classes["cart-items"]}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total Amout</span>
            <span>{+total}</span>
          </div>

          {isOrder && (
            <OrderItemsComponent
              onConfirm={submitOrderHandler}
              onCancel={props.onClose}
            />
          )}

          {!isOrder && modalAction}
        </React.Fragment>
      )}
      {noCartItems && NoItem}
    </React.Fragment>
  );
  return (
    <ModalComponent onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </ModalComponent>
  );
};

export default CartSection;
