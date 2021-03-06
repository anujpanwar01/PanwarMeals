import HeaderButtonComponent from "../HeaderButton/HeaderButton.Component";
import classes from "./Header.module.css";
const HeaderComponent = (props) => {
  return (
    <header className={classes.header}>
      <h1>PanwarMeals</h1>
      <HeaderButtonComponent onOpen={props.onOpen} />
    </header>
  );
};
export default HeaderComponent;
