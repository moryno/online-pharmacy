import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCarousel = ({ category, title, type }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  let link;
  switch (type) {
    case "baby":
      link = `/products/baby`;
      break;
    case "women":
      link = `/products/women`;
      break;

    default:
      break;
  }

  return (
    <Container>
      <Top>
        <Title>{title}</Title>
        <SeeMore>See more</SeeMore>
      </Top>
      <Bottom>
        <Arrow direction={"left"} onClick={() => handleClick("left")}>
          <ArrowBack />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {category.map((item) => (
            <Link to={link}>
              <Slide key={item.id}>
                <ImageContainer>
                  <Image src={item.image} alt="productImage" />
                </ImageContainer>
                <InfoContainer>
                  <SlideTitle>{item.title}</SlideTitle>
                  <Price>Ksh.1200</Price>
                  <Description>{item.description}</Description>
                </InfoContainer>
              </Slide>
            </Link>
          ))}
        </Wrapper>
        <Arrow direction={"right"} onClick={() => handleClick("right")}>
          <ArrowForward />
        </Arrow>
      </Bottom>
    </Container>
  );
};

export default ProductCarousel;

const Container = styled.main`
  margin-top: 3.125rem;
  box-sizing: border-box;
  color: #1e144f;
  width: 100%;
`;

const Top = styled.section`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 1rem;
  position: relative;
`;
const Bottom = styled.section`
  margin: 0 auto;
  width: 70%;
  height: 25rem;
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
const Wrapper = styled.section`
  height: 100%;
  gap: 1rem;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -70}vw);
  transition: all 1.5s ease;
`;

const Title = styled.h1``;

const Slide = styled.article`
  border-radius: 5px;
  border: 0.5px solid lightgray;
  width: 15.7rem;
  height: 22rem;

  background-color: #fff;
  align-items: center;
`;

const ImageContainer = styled.article`
  width: 100%;
  height: 14.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const InfoContainer = styled.article`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`;

const SlideTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;

const Arrow = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.direction === "left" ? "#FFFFFF" : "#1896ff"};
  color: ${(props) => (props.direction === "left" ? "#1896ff" : "#eff8ff")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "45%"};
  right: ${(props) => props.direction === "right" && "45%"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const SeeMore = styled.span`
  position: absolute;
  color: #1896ff;
  top: 0;
  right: 2%;
  font-weight: 500;
  cursor: pointer;
`;
