import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <SubTitle>Manage all your purchase efficiently</SubTitle>
        <Description>
          Let's log you in so you can verify your personal account and begin
          setting up your profile.
        </Description>
        <Hr />
        <Form>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            type="text"
          />

          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />

          <Button>Login</Button>
        </Form>
        <Register>Don't have an account yet? Join medicine</Register>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.main`
  color: #1e144f;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.article`
  width: 25%;
  padding: 1.25rem;
  background-color: #f4f5f9;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const SubTitle = styled.span`
  font-weight: 600;
`;

const Description = styled.p`
  line-height: 1.5;
  margin: 1rem 0;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;

  margin: 1.25rem 10px 0 0;
  padding: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  background-color: #1896ff;
  color: #eff8ff;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  margin: 1rem 0;
  border: none;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
  width: 100%;
`;

const Register = styled.span``;
