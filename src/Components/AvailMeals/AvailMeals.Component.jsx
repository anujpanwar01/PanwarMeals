import CardComponent from "../Card/Card.Component";
import MealItem from "../MealItem/MealItem.Component";
import classes from "./AvailMeals.module.css";
import { useEffect, useReducer } from "react";

const init = {
  meals: [],
  isLoading: true,
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "MEALS":
      return { ...state, meals: action.payload };
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return init;
  }
};

const AvailMealsComponent = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const { meals, isLoading, error } = state;

  useEffect(() => {
    const mealsData = async () => {
      try {
        const res = await fetch(
          "https://panwar-meals-default-rtdb.firebaseio.com/meals.json"
        );
        if (!res.ok) throw new Error("Something went wrong");

        const data = await res.json();

        const loadedData = [];
        for (const key in data) {
          const meal = {
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          };
          loadedData.push(meal);
        }
        dispatch({ type: "MEALS", payload: loadedData });
        dispatch({ type: "LOADING", payload: false });
      } catch (err) {
        dispatch({ type: "LOADING", payload: false });
        dispatch({ type: "ERROR", payload: err.message });
      }
    };
    mealsData();
    return () => mealsData();
  }, []);

  if (error) {
    return (
      <section className={classes["error-section"]}>
        <p>{error}</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.loadingSection}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => {
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
