import React from "react";
import { useDispatch } from "react-redux";
import { inc, reset } from "../redux/slices/counter-slice";
const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hero</h2>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Hero;
