import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>Reliable on time home delivery</Title>
          <Description>
            Our in-house pharmacist ensure your medicines reach you when you
            need them.
          </Description>
          <InputContainer>
            <Input />
            <Search style={{ position: "absolute", left: "0" }} />
            <SearchContainer>Search</SearchContainer>
          </InputContainer>
        </InfoContainer>
        <ImageContainer>
          <Image
            src="https://3xo4di2xpixr3oltj74229w9-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/medicine-pharmacy-main.png"
            alt="heroImg"
          />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.main`
    height: 60vh:
`;

const Wrapper = styled.section`
  display: flex;
`;

const InfoContainer = styled.section`
  flex: 1;
  padding: 3.75rem;
`;

const Title = styled.h1`
  color: #1e144f;
  font-size: 5.3rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #1e144f;
  letter-spacing: 1px;
  line-height: 1.5;
  width: 60%;
  margin-bottom: 1rem;
`;

const InputContainer = styled.article`
  width: 70%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;
`;

const SearchContainer = styled.article`
  position: absolute;
  padding: 1rem;
  background-image: linear-gradient(#ffb447, #fea117);
  right: 0;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
`;

const ImageContainer = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
