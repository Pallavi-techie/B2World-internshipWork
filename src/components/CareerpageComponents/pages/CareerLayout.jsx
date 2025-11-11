// src/pages/Career/CareerLayout.jsx
import React from "react";
import Navbar from "../commoncomponents/Navbar";
import Footer from "../commoncomponents/Footer";
import { Outlet } from "react-router-dom";

const CareerLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Nested routes will appear here */}
      <Footer />
    </>
  );
};

export default CareerLayout;
