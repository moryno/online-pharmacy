import { Badge } from "@material-ui/core";
import { Dashboard, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Medication from "../assests/images/medication.png";
import { logout } from "../redux/userSlice";

const Navbar = ({ search }) => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const admin = user?.user.profile?.is_admin;
  const [input, setInput] = useState("");

  // search(input);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    window.location.replace("/");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={Medication} />
          <NavLink to="/">
            <Logo>
              med<FirstSpan>ic</FirstSpan>
              <SecondSpan>ine</SecondSpan>
            </Logo>
          </NavLink>
        </Left>
        <Center>
          <Input
            onChange={(event) => setInput(event.target.value)}
            placeholder="Search..."
          />
          <SearchContainer>
            <Search style={{ fontSize: "2rem" }} />
          </SearchContainer>
        </Center>
        <Right>
          {user ? (
            <MenuItems onClick={handleLogOut}>
              <SignText>Goodbye, </SignText>
              <SignAccount>sign out</SignAccount>
            </MenuItems>
          ) : (
            <NavLink to="/register">
              <MenuItems>
                <SignText>Hello, sign in</SignText>
                <SignAccount>Account & Lists</SignAccount>
              </MenuItems>
            </NavLink>
          )}
          <NavLink to="/settings">
            <MenuItems>
              <Profile
                src={
                  (user && user.profile?.image) ||
                  "https://e7.pngegg.com/pngimages/1011/702/png-clipart-computer-icons-graphics-iconfinder-administrator-icon-monochrome-black.png"
                }
                alt="profile"
              />
            </MenuItems>
          </NavLink>
          {admin ? (
            <NavLink to="/admin">
              <MenuItems>
                <Dashboard />
                <SignAccount>Dashboard</SignAccount>
              </MenuItems>
            </NavLink>
          ) : (
            <NavLink to={"/cart"}>
              <CartItem>
                <Badge
                  badgeContent={quantity}
                  color="primary"
                  overlap="rectangular"
                >
                  <ShoppingCartOutlined />
                </Badge>
                <Cart>Cart</Cart>
              </CartItem>
            </NavLink>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.main``;

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
  border-radius: 5px;
  border: 0.8px solid rgb(230, 227, 227);
  outline: none;
  &::placeholder {
    font-size: 12px;
  }
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
`;
const CartItem = styled.article`
  cursor: pointer;
  color: #1e144f;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  background-color: #1896ff;
  border: none;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  color: #eff8ff;
`;

const Profile = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const SignText = styled.span``;

const SignAccount = styled.span`
  font-weight: bold;
`;

const Cart = styled.h1`
  margin-left: 0.3rem;
`;
