import {
  ArrowBack,
  ArrowForward,
  ArrowLeftSharp,
  ArrowLeftTwoTone,
  ArrowRightTwoTone,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const MostPopularList = () => {
  return (
    <Container>
      <Title>Shop common medications</Title>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image
              src="https://www.nacds.org/wp-content/uploads/2017/04/Pills-and-Rx-bottle.jpg"
              alt="productImage"
            />
          </ImageContainer>
          <InfoContainer>
            <SlideTitle>Omega 3</SlideTitle>
            <Price>Ksh.1200</Price>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Description>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image
              src="https://www.nacds.org/wp-content/uploads/2017/04/Pills-and-Rx-bottle.jpg"
              alt="productImage"
            />
          </ImageContainer>
          <InfoContainer>
            <SlideTitle>Omega 3</SlideTitle>
            <Price>Ksh.1200</Price>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Description>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image
              src="https://www.nacds.org/wp-content/uploads/2017/04/Pills-and-Rx-bottle.jpg"
              alt="productImage"
            />
          </ImageContainer>
          <InfoContainer>
            <SlideTitle>Omega 3</SlideTitle>
            <Price>Ksh.1200</Price>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Description>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image
              src="https://www.nacds.org/wp-content/uploads/2017/04/Pills-and-Rx-bottle.jpg"
              alt="productImage"
            />
          </ImageContainer>
          <InfoContainer>
            <SlideTitle>Omega 3</SlideTitle>
            <Price>Ksh.1200</Price>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Description>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image
              src="https://www.nacds.org/wp-content/uploads/2017/04/Pills-and-Rx-bottle.jpg"
              alt="productImage"
            />
          </ImageContainer>
          <InfoContainer>
            <SlideTitle>Omega 3</SlideTitle>
            <Price>Ksh.1200</Price>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Description>
          </InfoContainer>
        </Slide>
      </Wrapper>
      {/* <Arrow>
        {" "}
        <ArrowBack />
      </Arrow>
      <Arrow>
        <ArrowForward />
      </Arrow> */}
    </Container>
  );
};

export default MostPopularList;

const Container = styled.main`
  padding: 3.125rem 12.5rem;
  box-sizing: border-box;
  color: #1e144f;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

const Title = styled.h1``;

const Slide = styled.article`
  width: 18%;
  margin-bottom: ;
  border-radius: 5px;
  border: 1px solid lightgray;
`;

const ImageContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Image = styled.img`
  max-width: 100%;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;

const Arrow = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #fff7f7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   position: absolute;
  top: 0;
  bottom: 0;
  //   left: ${(props) => props.direction === "left" && "10px"};
  //   right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;

  z-index: 2;
`;
