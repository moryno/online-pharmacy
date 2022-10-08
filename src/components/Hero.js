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
          <StatsContainer>
            <Stats>
              <StatsText>100%</StatsText>
              <StatsText>Delivery Success</StatsText>
            </Stats>
            <Stats>
              <StatsText>5.0(67k)</StatsText>
              <StatsText>Customer review</StatsText>
            </Stats>
          </StatsContainer>
        </InfoContainer>
        <ImageContainer>
          <Image
            src="https://3xo4di2xpixr3oltj74229w9-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/medicine-pharmacy-main.png"
            alt="heroImg"
          />
          <DeliverInfoContainer>
            <DeliverText>🛵 Delivery with</DeliverText>
            <DeliverText>🕐 30 minutes</DeliverText>
          </DeliverInfoContainer>
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.main`
    height: 70vh:
    width: 98%;
    margin: auto;
    box-sizing:border-box;
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
`;

const InfoContainer = styled.section`
  flex: 1;
  padding: 3.75rem;
  box-sizing: border-box;
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
  margin-bottom: 3rem;
  position: relative;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
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
  box-sizing: border-box;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DeliverInfoContainer = styled.article`
  display: flex;
  color: #1e144f;
  flex-direction: column;
  position: absolute;
  left: 70%;
  top: 25%;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

const DeliverText = styled.span`
  font-weight: 600;
`;

const StatsContainer = styled.div`
  display: flex;
  width: 70%;
`;

const Stats = styled.div`
  display: flex;
  margin-right: 1rem;
  flex-direction: column;
  border-radius: 5px;
  padding: 0.7rem;
  align-items: center;
  &:first-child {
    background-image: linear-gradient(#ffb447, #fea117);
    color: #eff8ff;
  }
  &:last-child {
    background-color: #1896ff;
    border: none;

    color: #eff8ff;
  }
`;

const StatsText = styled.span`
  &:first-child {
    font-weight: 600;
  }
`;
