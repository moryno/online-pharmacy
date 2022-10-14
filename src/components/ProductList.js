import React, { useEffect, useState } from "react";
import styled from "styled-components";
import request from "../Helpers/requestMethods";
import Products from "./Products";

const ProductList = ({ filters, category, input }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await request.get(
          category ? `/products?category=${category}` : "/products"
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

  const filteredProducts = products?.filter((product) => {
    if (input === "") {
      return product;
    } else if (product.title?.toLowerCase().includes(input?.toLowerCase())) {
      return product;
    }
  });

  return (
    <Container>
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
  display: flex;
  color: #1e144f;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
