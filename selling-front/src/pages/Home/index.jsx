import React from "react";
import { Helmet } from "react-helmet-async";
import Products from "../../components/Products";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import About from "../../components/About";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Products />
      <About />
      <Services />
    </>
  );
};

export default Home;
