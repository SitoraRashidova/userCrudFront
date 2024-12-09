import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
    const state = useSelector()
    console.log
  return (
    <div>
      <h2>Header {1}</h2>
    </div>
  );
};
