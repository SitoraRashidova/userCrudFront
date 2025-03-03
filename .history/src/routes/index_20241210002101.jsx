import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Help from "../pages/help/Help";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/login/Login";
import Wishes from "../pages/wishes/Wishes";
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
