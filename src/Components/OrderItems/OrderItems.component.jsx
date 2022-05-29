import { useRef, useState } from "react";
import classes from "./OrderItems.module.css";

const OrderItemsComponent = (props) => {
  const [inputValidity, setInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() !== "";
  const isFiveChar = (value) =>
    value.trim().length >= 5 && value.trim().length <= 6;

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = isEmpty(enteredName);
    const enteredStreetIsValid = isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChar(enteredPostal);
    const enteredCityIsValid = isEmpty(enteredCity);

    setInputValidity({
      name: enteredName,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });
    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };
  return (
    <form className={classes.form} onClick={submitHandler}>
      <div
        className={`${classes.control} ${
          inputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">YourName</label>
        <input name="name" type="text" id="name" ref={nameInputRef} />
        {!inputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${classes.control} ${
          inputValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="address">Street</label>
        <input name="street" type="text" id="address" ref={streetInputRef} />
        {!inputValidity.street && <p>Please enter a valid stree</p>}
      </div>
      <div
        className={`${classes.control} ${
          inputValidity.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input name="postal" type="text" id="postal" ref={postalInputRef} />
        {!inputValidity.postal && <p>Postal address must have 5 numbers</p>}
      </div>
      <div
        className={`${classes.control} ${
          inputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input name="city" type="text" id="city" ref={cityInputRef} />
        {!inputValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
};
export default OrderItemsComponent;
