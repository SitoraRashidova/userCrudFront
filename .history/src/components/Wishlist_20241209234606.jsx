import React from "react";
import { useSelector } from "react-redux";
const Wishlist = () => {
        useSelector(s => s.wishlist.value)
  return (
    <div>
      <h2>Wishlist</h2>
    </div>
  );
};

export default Wishlist;
