import InputComponent from "../Input/Input.Component";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <InputComponent
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
