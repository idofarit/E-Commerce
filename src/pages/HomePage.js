import React, { Component } from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Navbar,
  Sidebar,
} from "../components";
import ScrollAnimate from "../components/ScrollAnimate";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ScrollAnimate />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
