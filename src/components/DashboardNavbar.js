import {
  ChatBubbleOutlineOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const DashboardNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search..." />
          <SearchOutlined style={{ cursor: "pointer" }} />
        </Search>
        <MenuItems>
          <MenuItem>
            <LanguageOutlined />
            English
          </MenuItem>
          <MenuItem>
            <FullscreenExitOutlined />
          </MenuItem>
          <MenuItem>
            <NotificationsNoneOutlined />
            <Counter>1</Counter>
          </MenuItem>
          <MenuItem>
            <ChatBubbleOutlineOutlined />
            <Counter>2</Counter>
          </MenuItem>
          <MenuItem>
            <ListOutlined />
          </MenuItem>
          <MenuItem>
            <Profile
              src="https://e7.pngegg.com/pngimages/1011/702/png-clipart-computer-icons-graphics-iconfinder-administrator-icon-monochrome-black.png"
              alt="adminImage"
            />
          </MenuItem>
        </MenuItems>
      </Wrapper>
    </Container>
  );
};

export default DashboardNavbar;

const Container = styled.main`
  height: 3.125rem;
  border-bottom: 0.5px solid rgb(230, 227, 227);
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;

const Search = styled.article`
  display: flex;
  align-items: center;
  border: 0.5px solid rgb(230, 227, 227);
  padding: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    font-size: 12px;
  }
`;

const MenuItems = styled.article`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.article`
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  position: relative;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: red;
  color: white;
  font-size: 10px;
  font-weight: bold;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
`;
