import Medication from "../assests/images/medication.png";
import styled from "styled-components";
import {
  AccountCircleOutlined,
  CreditCard,
  Dashboard,
  LocalShippingOutlined,
  Notifications,
  PersonOutlineOutlined,
  Settings,
} from "@material-ui/icons";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LogoutIcon from "@mui/icons-material/Logout";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <Image src={Medication} />
        <Logo>
          med<FirstSpan>ic</FirstSpan>
          <SecondSpan>ine</SecondSpan>
        </Logo>
      </Top>
      <Hr />
      <Center>
        <List>
          <Title>MAIN</Title>
          <Item>
            <Dashboard />
            <ItemSpan>Dashboard</ItemSpan>
          </Item>
          <Title>LISTS</Title>
          <Item>
            <PersonOutlineOutlined />
            <ItemSpan>Users</ItemSpan>
          </Item>
          <Item>
            <StoreMallDirectoryIcon />
            <ItemSpan>Products</ItemSpan>
          </Item>
          <Item>
            <CreditCard />
            <ItemSpan>Orders</ItemSpan>
          </Item>
          <Item>
            <LocalShippingOutlined />
            <ItemSpan>Delivery</ItemSpan>
          </Item>
          <Title>USEFUL</Title>
          <Item>
            <QueryStatsIcon />
            <ItemSpan>Stats</ItemSpan>
          </Item>
          <Item>
            <Notifications />
            <ItemSpan>Notifications</ItemSpan>
          </Item>
          <Title>SERVICE</Title>
          <Item>
            <SettingsSystemDaydreamIcon />
            <ItemSpan>System Health</ItemSpan>
          </Item>
          <Item>
            <PsychologyIcon />
            <ItemSpan>Logs</ItemSpan>
          </Item>
          <Item>
            <Settings />
            <ItemSpan>Settings</ItemSpan>
          </Item>
          <Title>USER</Title>
          <Item>
            <AccountCircleOutlined />
            <ItemSpan>Profile</ItemSpan>
          </Item>
          <Item>
            <LogoutIcon />
            <ItemSpan>Logout</ItemSpan>
          </Item>
        </List>
      </Center>
      <Bottom>Color</Bottom>
    </Container>
  );
};

export default Sidebar;

const Container = styled.main`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
`;

const Top = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.span`
  color: #1896ff;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  transform: rotate(270deg);
`;

const FirstSpan = styled.span`
  color: #e95568;
`;

const SecondSpan = styled.span`
  color: #fccd86;
`;

const Hr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(230, 227, 227);
`;

const Center = styled.section`
  padding: 0.625rem;
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: #999;
  margin-top: 1rem;
  margin-bottom: 5px;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #ece8ff;
  }
`;

const ItemSpan = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  margin-left: 10px;
`;

const Bottom = styled.section``;
