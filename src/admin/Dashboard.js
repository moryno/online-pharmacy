import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import DashboardNavbar from "../components/DashboardNavbar";
import Featured from "../components/Featured";
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
        <Charts>
          <Featured />
          <Chart />
        </Charts>
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

const Widgets = styled.section`
  display: flex;
  padding: 1.25rem;
  gap: 1.25rem;
`;

const Charts = styled.section`
  display: flex;
  padding: 0.3125rem 1.25rem;
  gap: 1.25rem;
`;
