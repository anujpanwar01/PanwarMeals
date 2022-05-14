import classes from "./Input.module.css";

const InputComponent = ({ label, ...props }) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};
export default InputComponent;
