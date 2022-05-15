import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick} />
);

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.context}>{props.children}</div>
    </div>
  );
};

const CartOverlay = document.getElementById("cart-overlay");

const ModalComponent = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClick={props.onClose} />, CartOverlay)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        CartOverlay
      )}
    </Fragment>
  );
};

export default ModalComponent;
