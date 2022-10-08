import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethods";
// import {addProduct} from "../redux/cartRedux";
// import { useDispatch } from "react-redux";

export const Product = () => {
  //   const location = useLocation();
  //   const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const getProduct = async () => {
  //       try {
  //         const { data } = await publicRequest.get("/products/find/" + id);
  //         setProduct(data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     getProduct();
  //   }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image
            src="https://www.nacds.org/wp-content/uploads/2017/04/Pills-and-Rx-bottle.jpg"
            alt="productImage"
          />
        </ImageContainer>
        <InfoContainer>
          <Title>{"Drug"}</Title>
          <Desc>
            {
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristiquesemper nulla sed condimentum. Donec tristique, ipsum quis bibendum vulputate"
            }
          </Desc>
          <Price>Ksh. 1900</Price>

          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleQuantity("dec")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => handleQuantity("inc")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  color: #1e144f;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;

  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #e95568;
  background-color: white;
  font-weight: 500;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
