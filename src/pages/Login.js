import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(dispatch, inputs);
  };
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <Logo>
            med<FirstSpan>ic</FirstSpan>
            <SecondSpan>ine</SecondSpan>
          </Logo>
          <Text>A few clicks aways from creating your Account</Text>
        </LeftWrapper>
      </Left>
      <Right>
        <Wrapper>
          <Title>Login</Title>
          <SubTitle>Manage all your purchase efficiently</SubTitle>
          <Description>
            Let's log you in so you can verify your personal account and begin
            setting up your profile.
          </Description>
          <Hr />
          <Form onSubmit={handleSubmit}>
            <Input
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="Username"
              type="text"
            />

            <Input
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />

            <Button disabled={isFetching}>LOGIN</Button>
            {error && <Error>Something went wrong</Error>}
          </Form>
          <Register>
            Don't have an account yet?
            <Link to="/register">
              <Span>Join medicine</Span>
            </Link>
          </Register>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Login;

const Container = styled.main`
  color: #1e144f;
  background-color: #f6f7fb;
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Left = styled.section`
  flex: 0.5;
  background-color: #1896ff;
  height: 100%;
  flex-direction: column;
`;

const LeftWrapper = styled.section`
  padding: 3.75rem 1.5rem;
  box-sizing: border-box;
`;

const Text = styled.p`
  color: #e4f1fd;
`;

const Logo = styled.h1`
  color: #eff8ff;
  margin-bottom: 4rem;
`;

const FirstSpan = styled.span`
  color: #e95568;
`;

const SecondSpan = styled.span`
  color: #fccd86;
`;

const Right = styled.section`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.75rem;
  box-sizing: border-box;
`;

const Wrapper = styled.article`
  width: 40%;
  padding: 1.25rem;
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
  position: relative;
`;

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid lightgray;
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
  &:disabled {
    cursor: not-allowed;
    color: #007cda;
  }
`;
const Span = styled.span`
  color: #e95568;
  cursor: pointer;
`;

const Register = styled.span``;

const Error = styled.span`
  color: red;
  position: absolute;
  bottom: 10%;
  left: 43%;
`;
