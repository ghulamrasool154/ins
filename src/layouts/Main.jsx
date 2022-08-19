import React from "react";
import classes from "./Main.module.css";
import Pdf from "../pages/pdf/Pdf";
import Popupbarcode from "../components/popupbarcode/Popupbarcode";
import Video from "../pages/video/Video";
import { Routes, Route } from "react-router-dom";
import Order from "../pages/order/Order";
const Main = () => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route path="/" element={<Video />}></Route>
        <Route path="/pdf" element={<Pdf />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
