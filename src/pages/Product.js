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
      {/* <CommentContainer>
        <CommentTitle>{product.reviews?.length} Reviews</CommentTitle>
        {product.reviews?.map((review) => {
          return (
            <Comment key={review.id}>
              <CommentHeader>
                <UserName>{review.user.username}</UserName>
                <CommentDate>
                  {new window.Date(review.created_at).toDateString()}
                  <CommentEdit>
                    <Icon>
                      <i
                        className="singlePostIcon far fa-edit"
                        onClick={() => setUpdateMode(!updateMode)}
                      ></i>
                    </Icon>
                    <Icon>
                      <i
                        className="singlePostIcon far fa-trash-alt"
                        onClick={() => handleDelete(review.id)}
                      ></i>
                    </Icon>
                  </CommentEdit>
                </CommentDate>
              </CommentHeader>
              <Post>{review.reviews}</Post>
            </Comment>
          );
        })}
      </CommentContainer>
      <FormTitle>Write a review</FormTitle>
      {user ? (
        <ComposeForm onSubmit={handleSubmit}>
          <FormWrapper>
            <FormDesc>
              Your email address will not be publish.Required fields are marked
              *
            </FormDesc>
            <FormLabel htmlFor="content">Comment *</FormLabel>
            <Content
              id="content"
              name="reviews"
              type="text"
              onChange={handleChange}
            />
            <FormLabel htmlFor="score">Score *</FormLabel>
            <CommentScore
              id="content"
              name="score"
              type="number"
              onChange={handleChange}
            />
            <Button>Post Comment</Button>
          </FormWrapper>
        </ComposeForm>
      ) : (
        <Link to={"/register"}>
          <Button style={{ marginBottom: "5vh" }}>Subscribe</Button>
        </Link>
      )} */}
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
  margin-top: 1rem;
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

const CommentContainer = styled.section``;

const Comment = styled.article`
  border-radius: 0.1rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid lightgray;
`;

const CommentHeader = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
`;

const CommentDate = styled.span`
  font-size: 0.9rem;
  float: right;
`;

const CommentTitle = styled.h3``;

const Post = styled.span`
  font-size: 0.8rem;
`;

const UserName = styled.span`
  font-size: 0.9rem;
`;

const ComposeForm = styled.form`
  background-image: -webkit-linear-gradient(
    45deg,
    rgb(200, 25, 38) 30%,
    rgb(239, 110, 27) 70%
  );
  border-radius: 0.3rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  padding: 1rem;
  color: #ffffff;
  font-weight: 600;
`;

const FormWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 5vh;
`;

const FormDesc = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const FormLabel = styled.label``;

const Content = styled.textarea`
  font-size: 1.25rem;
  height: 10vh;
  padding: 1.25rem;
  color: #000000;
  border: none;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  &:focus {
    outline: none;
  }
`;

const CommentScore = styled.input`
  width: 5rem;
  padding: 1rem;
  color: #000000;
`;

// const Button = styled.button`
//   width: 10rem;
//   margin-top: 1rem;
//   border: none;
//   alighn-self: end;
//   padding: 1rem;
//   background-color: #000000;
//   color: #ffffff;
//   font-weight: 600;
//   cursor: pointer;
// `;
