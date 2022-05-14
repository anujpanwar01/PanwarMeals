import classes from "./Hero.module.css";
import meals from "../../assister/meals.jpg";
const HeroComponent = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={meals} alt="meals table" />;
    </div>
  );
};

export default HeroComponent;
