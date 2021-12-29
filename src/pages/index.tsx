import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Solution from "../components/Solution";
const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Solution />
      <Footer />
    </div>
  );
};

export default Home;
