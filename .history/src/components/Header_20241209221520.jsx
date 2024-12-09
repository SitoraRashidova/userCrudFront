import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  return (
    <div>
      <h2>Header {counter}</h2>
    </div>
  );
};
