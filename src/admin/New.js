import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <Container>
      <Sidebar />
      <NewContainer>
        <DashboardNavbar />
        <Top>
          <Title>{title}</Title>
        </Top>
        <Bottom>
          <Left>
            {" "}
            <Image
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
              alt="ItemImg"
            />
          </Left>
          <Right>
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

              <Button>Send</Button>
            </Form>
          </Right>
        </Bottom>
      </NewContainer>
    </Container>
  );
};

export default New;

const Container = styled.main`
  display: flex;
  color: #1e144f;
`;

const NewContainer = styled.section`
  flex: 6;
`;

const Top = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const Title = styled.h1`
  color: lightgray;
  font-size: 1.25rem;
`;

const Bottom = styled.section`
  padding: 1.25rem;
  margin: 1.25rem;
  display: flex;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const Left = styled.article`
  flex: 1;
  text-align: center;
`;

const Image = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

const Right = styled.article`
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
