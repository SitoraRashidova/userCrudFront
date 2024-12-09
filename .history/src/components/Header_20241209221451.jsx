import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const counter = useSelector((state) => state.counter.va);
  console.log(counter);
  return (
    <div>
      <h2>Header {1}</h2>
    </div>
  );
};
