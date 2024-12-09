import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";

import NotFound from "../pages/not-found/NotFound";

import User from "../pages/user/User";

const Router = ({ data }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home data={data} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
