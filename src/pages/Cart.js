import {
  Add,
  Delete,
  DeleteForever,
  DeleteOutline,
  DeleteOutlineRounded,
  DeleteOutlineSharp,
  DeleteRounded,
  DeleteSweep,
  DeleteTwoTone,
  Remove,
  RemoveCircleOutline,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <BigTitle>YOUR BAG</BigTitle>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CLEAR CART</TopButton>
        </Top>
        <Bottom>
          <Product>
            <ProductDetail>
              <Image
                src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="movieImg"
              />
              <Detail>
                <Title>Product</Title>
                <ProductName>RAYZEN DESKTOP MAC 1</ProductName>
                <RemoveCart>
                  <DeleteRounded />
                </RemoveCart>
              </Detail>
              <Detail>
                <Title>Price</Title>
                <ProductPrice>Ksh132,0000</ProductPrice>
              </Detail>
              <Detail>
                <Title>Quantity</Title>
                <QuantityContainer>
                  <Remove
                    style={{ cursor: "pointer" }}
                    onClick={() => handleQuantity("dec")}
                  />
                  <Quantity>{quantity}</Quantity>
                  <Add
                    style={{ cursor: "pointer" }}
                    onClick={() => handleQuantity("inc")}
                  />
                </QuantityContainer>
              </Detail>
              <Detail>
                <Title>Subtotal</Title>
                <ProductPrice>
                  <b>Ksh192,0000</b>
                </ProductPrice>
              </Detail>
            </ProductDetail>
          </Product>
          <Hr />
          <SummaryContainer>
            <SummaryDetail>
              <SummaryTitle>Subtotal</SummaryTitle>
              <SummaryText>Ksh118,000</SummaryText>
            </SummaryDetail>
            <SummaryDetail>
              <SummaryTitle>Shipping</SummaryTitle>
              <SummaryText>
                Flat rate: Ksh400.00 Delivery within <b>Nairobi County.</b>
              </SummaryText>
            </SummaryDetail>
            <SummaryDetail>
              <SummaryTitle>VAT</SummaryTitle>
              <SummaryText>Ksh18,000</SummaryText>
            </SummaryDetail>
            <SummaryDetail type="total">
              <SummaryTitle>Total</SummaryTitle>
              <SummaryText>Ksh18,000</SummaryText>
            </SummaryDetail>
            <Button>Proceed to checkout</Button>
          </SummaryContainer>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  color: #1e144f;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const BigTitle = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${(props) =>
    props.type === "filled" ? "none" : "2px solid #1896ff"};
  background-color: ${(props) =>
    props.type === "filled" ? "#e95568" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Product = styled.div`
  flex: 3;
`;

const ProductDetail = styled.div`
  display: flex;
`;

const Image = styled.img`
  min-width: 9.375rem;
  height: 9.375rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0px 20px;
`;

const Title = styled.span`
  margin-bottom: 10px;
`;

const ProductName = styled.span`
  font-weight: 300;
  color: #1896ff;
`;

const ProductPrice = styled.span`
  font-weight: 500;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryContainer = styled.div`
  flex: 1;
  background-color: #f4f5f9;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 25rem;
`;

const SummaryDetail = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
  flex-wrap: wrap;
`;

const SummaryTitle = styled.span``;

const SummaryText = styled.span`
  width: 50%;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1896ff;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Quantity = styled.span`
  background-color: #f5f5f7;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const RemoveCart = styled.button`
  border: none;
  background-color: transparent;
  color: #e95568;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
`;
