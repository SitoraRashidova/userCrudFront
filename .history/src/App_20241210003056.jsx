import React from "react";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import User from "./pages/user/User";
function App() {
  return (
    <>
      <Header />
      <h2>Redux Toolkit Homework</h2>
      <Hero />
      {/* <Product />
      <Wishlist /> */}
      <User />
    </>
  );
}

export default App;
