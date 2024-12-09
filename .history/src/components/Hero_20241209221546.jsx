import React from "react";
import { useDispatch } from "react-redux";
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