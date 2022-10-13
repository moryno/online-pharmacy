import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

const SingleUser = ({ inputs, title }) => {
  const { productId } = useParams();
  const [file, setFile] = useState("");
  const product = useSelector((state) =>
    state.product.products.find((product) => product.id == productId)
  );

  return (
    <Container>
      <Sidebar />
      <SingleContainer>
        <DashboardNavbar />
        <Top>
          <Left>
            <EditButton>Edit</EditButton>
            <Title>Information</Title>
            <Item>
              <Image src={product?.image} alt="ItemImg" />
              <Details>
                <ItemTitle>{product?.title}</ItemTitle>
                <DetailItem>
                  <ItemKey>Email:</ItemKey>
                  <ItemValue>janedoe@gmail.com</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Phone:</ItemKey>
                  <ItemValue>97655789</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Address:</ItemKey>
                  <ItemValue>Elton 24433</ItemValue>
                </DetailItem>
                <DetailItem>
                  <ItemKey>Country:</ItemKey>
                  <ItemValue>Kenya</ItemValue>
                </DetailItem>
              </Details>
            </Item>
          </Left>
          <Right>Details</Right>
        </Top>
        <Bottom>
          <Title>{title}</Title>
          <Form>
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
                <Input type={input.type} placeholder={input.placeholder} />
              </FormInput>
            ))}

            <Button>Update</Button>
          </Form>
        </Bottom>
      </SingleContainer>
    </Container>
  );
};

export default SingleUser;

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

const EditButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 14px;
  color: #1896ff;
  background-color: #7551f818;
  cursor: pointer;
  border-radius: 0px 0px 0px 5px;
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
