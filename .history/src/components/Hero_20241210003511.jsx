import React from "react";
import { useDispatch } from "react-redux";
import { inc, reset } from "../redux/slices/counter-slice";

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h2 className="text-4xl font-bold text-gray-50 mb-6">Hero</h2>

      <div className="space-x-4">
        <button
          onClick={() => dispatch(inc(1))}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Increment-1
        </button>
        <button
          onClick={() => dispatch(inc(10))}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Increment-10
        </button>
        <button
          onClick={() => dispatch(inc(100))}
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Increment-100
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition duration-300 mt-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Hero;
