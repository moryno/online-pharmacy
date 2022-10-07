import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Medication from "../assests/images/medication.png";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={Medication} />
          <Logo>
            med<FirstSpan>ic</FirstSpan>
            <SecondSpan>ine</SecondSpan>
          </Logo>
        </Left>
        <Center>
          <Input />
          <SearchContainer>
            <Search style={{ fontSize: "2rem" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItems>
            <SignText>Hello, sign in</SignText>
            <SignAccount>Account & Lists</SignAccount>
          </MenuItems>
          <MenuItems>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            <Cart>Cart</Cart>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.main`
  height: 10vh;
`;

const Wrapper = styled.section`
  padding: 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.section`
  flex: 0.5;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: #1896ff;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transform: rotate(270deg);
`;

const FirstSpan = styled.span`
  color: #e95568;
`;

const SecondSpan = styled.span`
  color: #fccd86;
`;

const Center = styled.section`
  flex: 2.5;
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

const SearchContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  background-color: #1896ff;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #eff8ff;
  padding: 0.3rem;
`;

const Right = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MenuItems = styled.article`
  cursor: pointer;
  color: #1e144f;
  font-size: 0.9rem;
  &:first-child {
    display: flex;
    flex-direction: column;
  }
  &:last-child {
    display: flex;
    align-items: center;
    background-color: #1896ff;
    border: none;
    border-radius: 5px;
    padding: 0.3rem 1rem;
    color: #eff8ff;
  }
`;
const SignText = styled.span``;

const SignAccount = styled.span`
  font-weight: bold;
`;

const Cart = styled.h1`
  margin-left: 0.3rem;
`;
