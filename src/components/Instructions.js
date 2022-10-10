import React from "react";
import styled from "styled-components";

const Instructions = () => {
  return (
    <Container>
      <Wrapper>
        <Items>How it works</Items>
        <Steps>1</Steps>
        <Items>Search for your medication</Items>
        <Steps>2</Steps>
        <Items>Checkout your cart</Items>
        <Steps>3</Steps>
        <Items>Get your meds delivered</Items>
      </Wrapper>
    </Container>
  );
};

export default Instructions;

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background-color: #f6f7fb;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const Items = styled.article`
  padding: 2px 3rem 2px 1rem;
  font-size: 1rem;
  font-weight: bold;
  &:first-child {
    font-size: 1.25rem;
  }
`;

const Steps = styled.article`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #1896ff;
  color: #eff8ff;
`;
