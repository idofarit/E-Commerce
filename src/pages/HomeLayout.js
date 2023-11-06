import React from "react";
import { Footer, Header, Navbar, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Outlet />

      <Footer />
    </>
  );
};

export default HomeLayout;
