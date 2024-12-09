import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return (
    <div className="bg-gray-800 text-white p-4 shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-semibold text-center">Header</h2>
      <p className="text-center text-lg mt-2">
        Counter Value:{" "}
        <span className="font-bold text-green-400">{counter}</span>
      </p>
    </div>
  );
};
