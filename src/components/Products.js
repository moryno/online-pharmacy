import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Product = ({ category, filters, sort }) => {
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

  const filteredProduct = useEffect(() => {
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

  return products.map((product) => (
    <Card key={product.id}>
      <ImageContainer>
        <Image src={product.image} alt="productImage" />
      </ImageContainer>
      <InfoContainer>
        <Category>
          <CategoryTitle>{product.categories}</CategoryTitle>
        </Category>
        <Title>{product.title}</Title>
        <Price>{product.price}</Price>
      </InfoContainer>
    </Card>
  ));
};

export default Product;

const Card = styled.article`
  width: 22%;
  margin-bottom: 1rem;
  border-radius: 5px;
  color: #1e144f;
  background-color: #fff;
`;

const ImageContainer = styled.article`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Category = styled.article`
  margin-bottom: 0.5rem;
`;

const CategoryTitle = styled.span`
  font-size: 0.8125rem;
  font-family: "Varela Round", sans-serif;
  line-height: 1.25rem;
  margin-top: 1rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;

const InfoContainer = styled.article`
  padding: 0.5rem 0;
  box-sizing: border-box;
`;

const Title = styled.p`
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;
