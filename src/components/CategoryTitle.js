import React from "react";
import styled from "styled-components";

const CategoryTitle = () => {
  return (
    <Container>
      <Title>Browse medicines & health products</Title>
      <CategoryContainer>
        <Category>
          <CatTitle>👶 Baby Care</CatTitle>
        </Category>
        <Category>
          <CatTitle>👪 Family Care</CatTitle>
        </Category>
        <Category>
          <CatTitle>Alternate</CatTitle>
        </Category>
        <Category>
          <CatTitle>🏋️‍♀️ 0-0 Fitness</CatTitle>
        </Category>
        <Category>
          <CatTitle>👩 Women's Care</CatTitle>
        </Category>
        <Category>
          <CatTitle>Devices</CatTitle>
        </Category>
      </CategoryContainer>
    </Container>
  );
};

export default CategoryTitle;

const Container = styled.main`
  padding: 0 12.5rem;
  display: flex;
  color: #1e144f;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
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

const CatTitle = styled.h4``;
