import React from "react";
import { useDispatch } from "react-redux";
import { inc } from "../redux/slices/counter-slice";
const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hero</h2>
      <button>Increment</button>
    </div>
  );
};

export default Hero;
