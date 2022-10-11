import {
  Facebook,
  Instagram,
  LocationOn,
  MailOutline,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          med<FirstSpan>ic</FirstSpan>
          <SecondSpan>ine</SecondSpan>
        </Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique
          semper nulla sed condimentum. Donec tristique, ipsum quis bibendum
          vulputate
        </Desc>
        <SocialIcon>
          <Icon color="3B5999">
            <Facebook />
          </Icon>
          <Icon color="55ACEE">
            <Twitter />
          </Icon>
          <Icon color="E4405F">
            <Instagram />
          </Icon>
          <Icon color="E60023">
            <Pinterest />
          </Icon>
        </SocialIcon>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Baby Care</ListItem>
          <ListItem>Family Care</ListItem>
          <ListItem>Alternate</ListItem>
          <ListItem>0-0 Fitness</ListItem>
          <ListItem>Women's Care</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> Health House, Online
          Pharmacy Street
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +254 715 018 410
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@medicine.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: #1e144f;
  border-top: 0.5px solid rgb(230, 227, 227);
  ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialIcon = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  cursor: pointer;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  &:hover {
    font-weight: 700;
    transform: scale(1.1 1.5s ease);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })};
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })};
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Logo = styled.h1`
  color: #1896ff;
`;

const FirstSpan = styled.span`
  color: #e95568;
`;

const SecondSpan = styled.span`
  color: #fccd86;
`;
