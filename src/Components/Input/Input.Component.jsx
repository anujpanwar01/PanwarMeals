import React from "react";
import classes from "./Input.module.css";

const InputComponent = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>
        {label}
        <input ref={ref} {...props} />
      </label>
    </div>
  );
});
export default InputComponent;
