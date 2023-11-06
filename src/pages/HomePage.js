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
import Category from "../components/Category";
import styled from "styled-components";

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
