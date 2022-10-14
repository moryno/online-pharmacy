import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
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
      </Link>
    </Card>
  );
};

export default Product;

const Card = styled.article`
  margin-bottom: 1rem;
  border-radius: 5px;
  color: #1e144f;
  background-color: #fff;
  width: 24%;

  overflow: hidden;
`;

const ImageContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  position: relative;
  cursor: pointer;
  border-radius: 0.2375rem;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
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
  margin-top: 1rem;
  font-size: 1rem;
  color: darkgray;
  line-height: 1.25rem;
`;

const InfoContainer = styled.article`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;
`;

const Title = styled.p`
  margin-bottom: 0.5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  cursor: pointer;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;
