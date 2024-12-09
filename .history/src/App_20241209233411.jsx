import React from "react";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Wishlist from "./components/Wishlist";
function App() {
  return (
    <>
      <Header />
      <h2>Redux Toolkit</h2>
      <Hero />
      <Product />
      <Wishlist />
    </>
  );
}

export default App;
