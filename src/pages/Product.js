import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import request from "../Helpers/requestMethods";
import { addProduct } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState({});

  const user = useSelector((state) => state.user?.currentUser?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await request.get(`/products/${id}`);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
      product_id: id,
      user: user,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await request.post(`/reviews`, comment);
      setProduct({ ...product, data });
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.image} alt="productImage" />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>{product.price}</Price>

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
      <CommentContainer>
        <CommentTitle>{product.reviews?.length} Reviews</CommentTitle>
        {product.reviews?.map((review) => (
          <Comment key={review.id}>
            <CommentHeader>
              <UserName>{review?.username}</UserName>
              <CommentDate>
                {new window.Date(review.created_at).toDateString()}
              </CommentDate>
            </CommentHeader>
            <Post>{review.title}</Post>
          </Comment>
        ))}
      </CommentContainer>

      {user ? (
        <ComposeForm onSubmit={handleSubmit}>
          <FormTitle>Leave a review</FormTitle>
          <FormWrapper>
            <FormDesc>
              Your email address will not be publish.Required fields are marked
              *
            </FormDesc>
            <FormLabel htmlFor="content">Comment *</FormLabel>
            <Content
              id="content"
              name="title"
              type="text"
              onChange={handleChange}
            />

            <CommentButton>ADD REVIEWS</CommentButton>
          </FormWrapper>
        </ComposeForm>
      ) : (
        <Link to={"/register"}>
          <Button style={{ marginBottom: "5vh" }}>Subscribe</Button>
        </Link>
      )}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  color: #1e144f;
  background-color: #f6f7fb;
`;

const Wrapper = styled.div`
  padding: 3.125rem 6.25rem;
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
  width: 70%;
  line-height: 1.5;
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

const CommentContainer = styled.section`
  padding: 3.125rem 6.25rem;
`;

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
  border-radius: 0.3rem;
  box-sizing: border-box;
  border: 0.5px solid rgb(230, 227, 227);
  padding: 1rem;
  width: 80%;
  margin: 2rem auto;
  font-weight: 600;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  border-radius: 10px;
`;

const FormWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FormDesc = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const FormLabel = styled.label``;

const Content = styled.textarea`
  font-size: 1.25rem;
  height: 14vh;
  padding: 1.25rem;
  color: #000000;
  border: none;
  background-color: #fff;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  &:focus {
    outline: none;
  }
`;

const CommentButton = styled.button`
  width: 10rem;
  margin-top: 1rem;
  border: none;
  align-self: end;
  padding: 1rem;
  background-color: #1896ff;
  color: #eff8ff;
  font-weight: 600;
  cursor: pointer;
`;
