import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "../Helpers/firebase";
import { updateProduct } from "../redux/apiCalls";

const Single = ({ inputs, title }) => {
  const { productId } = useParams();
  const [file, setFile] = useState("");
  const [input, setInputs] = useState({});

  const product = useSelector((state) =>
    state.product.products.find((product) => product.id == productId)
  );

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const results = { ...input, image: downloadURL };
          try {
            updateProduct(productId, results, dispatch);
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <Container>
      <Sidebar />
      <SingleContainer>
        <DashboardNavbar />
        <Top>
          <Left>
            <Title>Information</Title>
            <Item>
              <Image src={product?.image} alt="ItemImg" />
              <Details>
                <ItemTitle>{product?.title}</ItemTitle>
                <DetailItem>
                  <ItemKey>Categories:</ItemKey>
                  <ItemValue>{product.categories}</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Price:</ItemKey>
                  <ItemValue>{product.price}</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Description:</ItemKey>
                  <ItemValue>{product.description}</ItemValue>
                </DetailItem>
              </Details>
            </Item>
          </Left>
          <Right>Details</Right>
        </Top>
        <Bottom>
          <BottomLeft>
            {" "}
            <UpdateImage
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
              alt="ItemImg"
            />
          </BottomLeft>
          <BottomRight>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit}>
              <FormInput>
                <Label htmlFor="image">
                  Image:{" "}
                  <DriveFolderUploadOutlined style={{ cursor: "pointer" }} />
                </Label>
                <Input
                  id="image"
                  type="file"
                  onChange={(event) => setFile(event.target.files[0])}
                  style={{ display: "none " }}
                />
              </FormInput>
              {inputs.map((input) => (
                <FormInput key={input.id}>
                  <Label>{input.label}</Label>
                  <Input
                    type={input.type}
                    name={input.name}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                  />
                </FormInput>
              ))}

              <Button>Update</Button>
            </Form>
          </BottomRight>
        </Bottom>
      </SingleContainer>
    </Container>
  );
};

export default Single;

const Container = styled.main`
  display: flex;
  color: #1e144f;
`;

const SingleContainer = styled.section`
  flex: 6;
`;

const Top = styled.section`
  padding: 1.25rem;
  display: flex;
  gap: 1.25rem;
`;

const Left = styled.article`
  flex: 1;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  padding: 1.25rem;
  position: relative;
`;

const Item = styled.article`
  display: flex;
  gap: 1.25rem;
`;

const Image = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: lightgray;
  margin-bottom: 1.25rem;
`;

const Details = styled.article``;

const ItemTitle = styled.h2`
  margin-bottom: 10px;
  color: #555;
`;

const DetailItem = styled.article`
  margin-bottom: 10px;
  font-size: 14px;
`;

const ItemKey = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: gray;
`;

const ItemValue = styled.span`
  font-weight: 300;
`;

const Right = styled.article`
  flex: 2;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 0.625rem 1.25rem;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;
const BottomLeft = styled.article`
  flex: 1;
  text-align: center;
`;

const UpdateImage = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

const BottomRight = styled.article`
  flex: 2;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem;
  justify-content: space-around;
`;

const FormInput = styled.article`
  width: 40%;
`;

const Label = styled.label`
  display: flex;
  align-item: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 5px;
  outline: none;
  border-bottom: 1px solid lightgray;
`;

const Button = styled.button`
  width: 9.375rem;
  padding: 10px;
  border: none;
  background-color: #1896ff;
  color: #eff8ff;
  cursor: pointer;
  margin-top: 10px;
`;
