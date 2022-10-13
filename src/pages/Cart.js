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
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import request from "../Helpers/requestMethods";
import { deleteCart, removeProduct } from "../redux/cartSlice";

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // useEffect(() => {
  //   const checkout = () => {
  //     try {
  //       navigate("/success", { products: cart });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   checkout();
  // }, [cart.total, navigate]);

  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const { data } = await request.post("/orders", {
  //         user: currentUser,
  //         products: cart.products,
  //         amount: cart.total,
  //         address: currentUser.profile.address,
  //       });
  //       setOrderId(data.id);
  //     } catch {}
  //   };
  //   createOrder();
  // }, [cart.total, currentUser]);

  const handleCheckout = async () => {
    try {
      const { data } = await request.post("/orders", {
        user: currentUser,
        products: cart.products.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
        })),
        amount: cart.total,
        address: currentUser.profile?.address,
      });
      setOrderId(data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = () => {
    dispatch(removeProduct(cart));
  };

  const clearCart = () => {
    dispatch(deleteCart());
  };

  console.log(orderId);
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
          <TopButton type="filled" onClick={clearCart}>
            CLEAR CART
          </TopButton>
        </Top>
        <Bottom>
          <InfoContainer>
            {cart.products.map((product) => (
              <Product key={product.id}>
                <ProductDetail>
                  <Image src={product.image} alt="productImg" />
                  <Detail>
                    <Title>Product</Title>
                    <ProductName>{product.title}</ProductName>
                  </Detail>
                  <Detail>
                    <Title>Price</Title>
                    <ProductPrice>Ksh{product.price}</ProductPrice>
                  </Detail>
                  <Detail>
                    <Title>Quantity</Title>
                    <QuantityContainer>
                      <Remove
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity("dec")}
                      />
                      <Quantity>{product.quantity}</Quantity>
                      <Add
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity("inc")}
                      />
                    </QuantityContainer>
                  </Detail>
                  <Detail>
                    <Title>Subtotal</Title>
                    <ProductPrice>
                      <b>Ksh{product.price * product.quantity}</b>
                    </ProductPrice>
                  </Detail>
                  <Detail>
                    <Title>Remove</Title>
                    <RemoveCart>
                      <DeleteRounded onClick={handleRemove} />
                    </RemoveCart>
                  </Detail>
                </ProductDetail>
              </Product>
            ))}
          </InfoContainer>
          <SummaryContainer>
            <SummaryDetail>
              <SummaryTitle>Subtotal</SummaryTitle>
              <SummaryText>Ksh {cart.total}</SummaryText>
            </SummaryDetail>
            <SummaryDetail>
              <SummaryTitle>Delivery</SummaryTitle>
              <SummaryText>
                Free Delivery within <b>Nairobi County.</b>
              </SummaryText>
            </SummaryDetail>
            <SummaryDetail>
              <SummaryTitle>VAT</SummaryTitle>
              <SummaryText>Ksh {(cart.total * 16) / 100}</SummaryText>
            </SummaryDetail>
            <SummaryDetail type="total">
              <SummaryTitle>Total</SummaryTitle>
              <SummaryText>
                Ksh {cart.total + (cart.total * 16) / 100}
              </SummaryText>
            </SummaryDetail>
            <Button onClick={handleCheckout}>Proceed to checkout</Button>
          </SummaryContainer>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  color: #1e144f;
  background-color: #f6f7fb;
  min-height: 100vh;
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
const InfoContainer = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
`;

const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
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
  border: 0.5px solid rgb(230, 227, 227);
`;

const SummaryContainer = styled.div`
  flex: 1;
  background-color: #fff;
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
`;
