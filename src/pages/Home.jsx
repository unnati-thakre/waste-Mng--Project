import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Events from "../components/Home/Hero/events/Events";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
    </>
  );
};

export default Home;
