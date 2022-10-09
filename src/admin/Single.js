import React from "react";
import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Single = () => {
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
              <Image
                src="https://3xo4di2xpixr3oltj74229w9-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/medicine-pharmacy-main.png"
                alt="ItemImg"
              />
              <Details>
                <ItemTitle>Jane Doe</ItemTitle>
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
          <Title>Last Transactions</Title>
          <Table />
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
