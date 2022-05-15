import React, { useState } from "react";
import HeaderSection from "./Sections/Header.Section";
import MealsSection from "./Sections/Meals/Meals.Section";
import CartSection from "./Sections/Cart/Cart.Section";
import CartProvider from "./store/cart-provider";

const App = function () {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartHandler = () => setIsCartOpen(true);
  const closeCartHandler = () => setIsCartOpen(false);

  return (
    <CartProvider>
      {isCartOpen && <CartSection onClose={closeCartHandler} />}
      <HeaderSection onOpen={openCartHandler} />
      <main>
        <MealsSection />
      </main>
    </CartProvider>
  );
};

export default App;
