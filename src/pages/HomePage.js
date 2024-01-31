import React from "react";
import { FeaturedProducts, Hero } from "../components";
import ScrollAnimate from "../components/ScrollAnimate";
import Category from "../components/Category";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ScrollAnimate />

      <FeaturedProducts />
      <Category />
    </main>
  );
};

export default HomePage;
