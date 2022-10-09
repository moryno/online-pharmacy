import React from "react";
import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <HomeContainer>
        <DashboardNavbar />
        <Widgets>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Widgets>
      </HomeContainer>
    </Container>
  );
};

export default Dashboard;

const Container = styled.main`
  display: flex;
  color: #1e144f;
`;

const HomeContainer = styled.section`
  flex: 6;
`;

const Widgets = styled.article`
  display: flex;
  padding: 1.25rem;
  gap: 1.25rem;
`;
