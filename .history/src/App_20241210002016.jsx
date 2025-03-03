import React from "react";
import Router from "./routes";
const App = ({ data }) => {
  return <Router data={data} />;
};

export default App;

//
// import { Header } from "./components/Header";
// import Hero from "./components/Hero";
// import Product from "./components/Product";
// import Wishlist from "./components/Wishlist";
// import User from "./pages/user/User";
// function App() {
//   return (
//     <>
//       <Header />
//       <h2>Redux Toolkit</h2>
//       <Hero />
//       <Product />
//       <Wishlist />
//       <User />
//     </>
//   );
// }

// export default App;
