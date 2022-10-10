import { MonetizationOnOutlined } from "@material-ui/icons";
import styled from "styled-components";

const OurPromise = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Our promise to you</Title>
        <PromiseContainer>
          <Card>
            <MonetizationOnOutlined />
            <CardTitle>Simple pricing</CardTitle>
            <CardDescription>
              Our pricing options are clear and understandable
            </CardDescription>
          </Card>
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
  padding: 1.25rem;
  background-color: #f6f7fb;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const Title = styled.h1``;

const PromiseContainer = styled.article`
  display: flex;
  //   width: 100%;
  align-items: center;
  gap: 1.25rem;
`;

const Card = styled.article`
  flex: 1;
`;

const CardTitle = styled.span``;

const CardDescription = styled.span``;
