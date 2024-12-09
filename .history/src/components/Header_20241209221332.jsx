import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const counterSlice = useSelector();
  console.log(state);
  return (
    <div>
      <h2>Header {1}</h2>
    </div>
  );
};
