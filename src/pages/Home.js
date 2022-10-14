import React, { useState } from "react";
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
import { useSelector } from "react-redux";

const Home = () => {
  const [input, setInput] = useState("");
  const baby = useSelector((state) =>
    state.product.products.filter((product) => product.categories == "baby")
  );

  const women = useSelector((state) =>
    state.product.products.filter((product) => product.categories == "women")
  );

  const onAdd = (newInput) => {
    setInput(newInput);
  };

  return (
    <Container>
      <Navbar search={onAdd} />
      <Announcement />
      <Filter />
      <Hero />
      <Instructions />
      <ProductCarousel
        sliderItems={sliderItems}
        category={baby}
        type="baby"
        title="Shop common medications"
      />
      <ProductCarousel
        sliderItems={sliderItems}
        category={women}
        type="women"
        title="New on medicine"
      />
      <CategoryTitle />
      <ProductList input={input} />
      <OurPromise />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  background-color: #f6f7fb;
`;
