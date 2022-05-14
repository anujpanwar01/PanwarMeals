import HeaderButtonComponent from "../HeaderButton/HeaderButton.Component";
import classes from "./Header.module.css";
const HeaderComponent = () => {
  return (
    <header className={classes.header}>
      <h1>PanwarMeals</h1>
      <HeaderButtonComponent />
    </header>
  );
};
export default HeaderComponent;
