import React from "react";
import Footer from "../components/Footer";
import Growth from "../components/Growth";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Solution from "../components/Solution";
const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Solution />
      <Growth />
      <Footer />
    </div>
  );
};

export default Home;
