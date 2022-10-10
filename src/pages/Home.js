import React from "react";
import Announcement from "../components/Announcement";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
import { Footer } from "../components/Footer";
import MostPopularList from "../components/MostPopularList";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Instructions from "../components/Instructions";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Filter />
      <Hero />
      <Instructions />
      <MostPopularList />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
