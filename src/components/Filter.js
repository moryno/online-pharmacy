import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Filter = () => {
  const user = useSelector((state) => state.user?.currentUser?.user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <DropDownContainer>
            <DropDownHeader>Categories</DropDownHeader>
            <DropDownList>
              <Link to="/products/baby">
                <ListItems>Baby Care</ListItems>
              </Link>
              <Link to="/products/women">
                <ListItems>Women</ListItems>
              </Link>
              <Link to="/products/skin care">
                <ListItems>Skin Care</ListItems>
              </Link>
              <Link to="/products/cough">
                <ListItems>Cough Medication</ListItems>
              </Link>
              <Link to="/products/disinfectant">
                <ListItems>Disinfectant</ListItems>
              </Link>
              <ListItems>Family Care</ListItems>
              <ListItems>Fitness</ListItems>
            </DropDownList>
          </DropDownContainer>
          <MenuItems>
            <MenuTitle>Hot Deals</MenuTitle>
          </MenuItems>
          <MenuItems>
            <MenuTitle>About Us</MenuTitle>
          </MenuItems>
        </Left>
        {!user && (
          <Right>
            <MenuItems>
              <NavLink to="/register">
                <MenuTitle>Sign up</MenuTitle>
              </NavLink>
            </MenuItems>
            <MenuItems>
              <NavLink to="/login">
                <SignIn>Sign in</SignIn>
              </NavLink>
            </MenuItems>
          </Right>
        )}
      </Wrapper>
    </Container>
  );
};

export default Filter;

const Container = styled.main`
  width: 100%;
  margin: auto;
  color: #1e144f;
`;

const Wrapper = styled.section`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.article`
  display: flex;
  align-items: center;
`;

const MenuItems = styled.article`
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 1.6rem;
`;

const MenuTitle = styled.span`
  padding: 8px 16px;
`;
const SignIn = styled.span`
  background-image: linear-gradient(#ffb447, #fea117);
  color: #235543;
  padding: 8px 16px;
  border-radius: 5px;
`;

const DropDownList = styled.ul`
  background-color: #f6f7fb;
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 777;
  &:first-child {
    padding-top: 5px;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  margin-right: 1.6rem;

  &:hover ${DropDownList} {
    display: block;
  }
`;

const DropDownHeader = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    font-weight: 700;
    transform: scale(1.1 1.5s ease);
  }
`;

const ListItems = styled.li`
  font-weight: 200;
  padding: 10px 16px;
  cursor: pointer;
  min-width: 160px;
  display: block;
  &:hover {
    background-color: white;
    transform: scale(1.1 1.5s ease);
  }
`;

const Right = styled.article`
  display: flex;
  align-items: center;
`;
