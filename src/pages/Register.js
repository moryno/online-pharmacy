import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import request from "../Helpers/requestMethods";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const [confirmPassword, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      if (inputs.password === confirmPassword) {
        const { data } = await request.post("/register", inputs);
        data && window.location.replace("/login");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
    }
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
        <RightWrapper>
          <Title>Register</Title>
          <SubTitle>Manage all your purchase efficiently</SubTitle>
          <Description>
            Let's get you all set up so you can verify your personal account and
            begin setting up your profile.
          </Description>
          <Hr />
          <Form onSubmit={handleSubmit}>
            <Input
              id="firstName"
              name="first_name"
              onChange={handleChange}
              placeholder="First Name"
              type="text"
            />

            <Input
              id="lastName"
              name="last_name"
              onChange={handleChange}
              placeholder="Last Name"
              type="text"
            />

            <Input
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="Username"
              type="text"
            />

            <Input
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              type="email"
            />

            <Input
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />

            <Input
              id="confirmPassword"
              name="confirm_password"
              onChange={(event) => setConfirmPass(event.target.value)}
              placeholder="Confirm Password"
              type="password"
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Register</Button>
            {error && <Error>Password does not match!</Error>}
          </Form>
          <Login>
            Already have an account?
            <Link to="/login">
              <Span>Sign in</Span>
            </Link>
          </Login>
        </RightWrapper>
      </Right>
    </Container>
  );
};

export default Register;

const Container = styled.main`
  color: #1e144f;
  background-color: #f6f7fb;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
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
  padding: 3.75rem;
  box-sizing: border-box;
`;

const RightWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const SubTitle = styled.span`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  line-height: 1.5;
  margin-bottom: 1rem;
  width: 55%;
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
  min-width: 40%;
  margin: 1.25rem 10px 0 0;
  padding: 10px;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid lightgray;
`;

const Button = styled.button`
  width: 40%;
  background-color: #1896ff;
  color: #eff8ff;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
  border: none;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
  width: 100%;
`;

const Login = styled.span``;

const Span = styled.span`
  color: #e95568;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  position: absolute;
  bottom: 10%;
  left: 43%;
`;
