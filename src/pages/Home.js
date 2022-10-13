import React from "react";
import Announcement from "../components/Announcement";
import Filter from "../components/Filter";
import Hero from "../components/Hero";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Instructions from "../components/Instructions";
import OurPromise from "../components/OurPromise";
import ProductCarousel from "../components/ProductCarousel";
import { sliderItems } from "../Helpers/data";
import styled from "styled-components";
import CategoryTitle from "../components/CategoryTitle";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Filter />
      <Hero />
      <Instructions />
      <ProductCarousel
        sliderItems={sliderItems}
        title="Shop common medications"
      />
      <ProductCarousel sliderItems={sliderItems} title="New on medicine" />
      <CategoryTitle />
      <ProductList />
      <OurPromise />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  background-color: #f6f7fb;
`;
