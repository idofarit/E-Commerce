import React, { Component } from "react";
import {
  FeaturedProducts,
  Hero,
  Services,
  Contact,
  Navbar,
  Sidebar,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />

      <FeaturedProducts />
      <Contact />
      <Services />
    </main>
  );
};

export default HomePage;
