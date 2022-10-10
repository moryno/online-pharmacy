import styled from "styled-components";
import { ourPromise } from "../Helpers/promiseSource";

const OurPromise = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Our promises to you</Title>
        <PromiseContainer>
          {ourPromise.map((promise) => (
            <Card key={promise.id}>
              <Icon>{promise.icon}</Icon>
              <CardTitle>{promise.title}</CardTitle>
              <CardDescription>{promise.description}</CardDescription>
            </Card>
          ))}
        </PromiseContainer>
      </Wrapper>
    </Container>
  );
};

export default OurPromise;

const Container = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 15rem;
  background-color: #1896ff;
  color: #eff8ff;
  box-sizing: border-box;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 3rem;

  font-weight: bold;
`;

const PromiseContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Card = styled.article`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const CardTitle = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const CardDescription = styled.span`
  font-weight: 500;
  line-height: 1.5;
`;

const Icon = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 1rem;
  background-color: #007cda;
  margin-bottom: 1rem;
`;
