import React from "react";
import moduleName from 'module';
const DATA = [
  {
    id: 1,
    title: "Galaxy s22 ultra",
    price: 430,
  },
  {
    id: 2,
    title: "Iphone 15",
    price: 100,
  },
  {
    id: 3,
    title: "Huawei 7",
    price: 300,
  },
];
const Product = () => {
  return (
    <div>
      <h2>Product</h2>
      {DATA?.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <button>like</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Product;
