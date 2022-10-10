import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Products from "./Products";

const ProductList = ({ filters, category, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          category
            ? `http://localhost:3000/products?category=${category}`
            : "http://localhost:3000/products"
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    if (filters === "latest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => b.created_at - a.created_at)
      );
    } else if (filters === "oldest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.created_at - b.created_at)
      );
    }
  }, [filters]);
  return (
    <Container>
      <Title>Browse medicines & health products</Title>
      <CategoryContainer>
        <Category>
          <CategoryTitle>👶 Baby Care</CategoryTitle>
        </Category>
        <Category>
          <CategoryTitle>👪 Family Care</CategoryTitle>
        </Category>
        <Category>
          <CategoryTitle>Alternate</CategoryTitle>
        </Category>
        <Category>
          <CategoryTitle>🏋️‍♀️ 0-0 Fitness</CategoryTitle>
        </Category>
        <Category>
          <CategoryTitle>👩 Women's Care</CategoryTitle>
        </Category>
        <Category>
          <CategoryTitle>Devices</CategoryTitle>
        </Category>
      </CategoryContainer>
      <Wrapper>
        {products.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ProductList;

const Container = styled.main`
  padding: 3.125rem 12.5rem;
  display: flex;
  color: #1e144f;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.25rem;
`;

const CategoryContainer = styled.article`
  background-color: #f4f5f9;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

const Category = styled.article`
  background-color: #fff;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.8rem;
  border-radius: 5px;
`;

const CategoryTitle = styled.h4``;
