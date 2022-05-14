import React from "react";
import HeaderSection from "./Sections/Header.Section";
import MealsSection from "./Sections/Meals/Meals.Section";
function App() {
  return (
    <React.Fragment>
      <HeaderSection />
      <main>
        <MealsSection />
      </main>
    </React.Fragment>
  );
}

export default App;
