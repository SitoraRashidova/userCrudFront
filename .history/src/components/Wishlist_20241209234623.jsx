import React from "react";
import { useSelector } from "react-redux";
const Wishlist = () => {
        const  wishlist = useSelector(s => s.wishlist.value)
        <console className="l"></console>
  return (
    <div>
      <h2>Wishlist</h2>
    </div>
  );
};

export default Wishlist;
