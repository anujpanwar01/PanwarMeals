import { useReducer } from "react";
import CartContext from "./cart-context";

export const init = {
  item: [],
  totalAmount: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      // check if item is already exist;
      const itemExist = state.item.findIndex(
        (ele) => ele.id === action.payload.id
      );
      //find that element into array
      const existingCart = state.item[itemExist];

      let item;

      if (existingCart) {
        const updatingItem = {
          ...existingCart,
          amount: existingCart.amount + action.payload.amount,
        };

        item = [...state.item];

        item[itemExist] = updatingItem;
      } else {
        item = [action.payload, ...state.item];
      }

      const currState = {
        item,
        totalAmount,
      };

      return currState;
    /*

       why concat => why not push method
        1) we should'nt mutate the original state
        2) hence the push method update the existing array
        3) this is the reason why we don't use push method ever.

        
       
       const currState = state.item.concat(action.payload);
       const totalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;
   return {currState,totalAmount}
         */

    case "REMOVE_ITEM":
      const itemExists = state.item.findIndex(
        (ele) => ele.id === action.payload
      );

      const currentItem = state.item[itemExists];
      const updatedTotalAmount = state.totalAmount - currentItem.price;
      let totalItems;
      if (currentItem.amount === 1) {
        totalItems = state.item.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = { ...currentItem, amount: currentItem.amount - 1 };
        totalItems = [...state.item];
        totalItems[itemExists] = updatedItem;
      }
      return { item: totalItems, totalAmount: updatedTotalAmount };
    case "SUBMIT_ITEM":
      return init;
    default:
      return init;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, init);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", payload: item });
  };

  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", payload: id });
  };

  const submitItemHandler = () => {
    dispatchCart({ type: "SUBMIT_ITEM" });
  };

  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    submitItems: submitItemHandler,
  };

  const value = { ...cartContext };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
