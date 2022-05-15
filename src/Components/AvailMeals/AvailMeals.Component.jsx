import CardComponent from "../Card/Card.Component";
import MealItem from "../MealItem/MealItem.Component";
import classes from "./AvailMeals.module.css";
import DUMMY_MEALS from "../../assister/MealsData";

const AvailMealsComponent = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <CardComponent>
        <ul>{mealList}</ul>
      </CardComponent>
    </section>
  );
};

export default AvailMealsComponent;
