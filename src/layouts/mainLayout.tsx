// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the child routes */}
      <Footer />
    </>
  );
}

export default MainLayout;
