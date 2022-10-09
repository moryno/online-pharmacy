import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <Container>
      <Sidebar />
      <HomeContainer>Container</HomeContainer>
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
