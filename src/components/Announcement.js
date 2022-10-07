import styled from "styled-components";

const Announcement = () => {
  return <Container>We accept most major insurance plans</Container>;
};

export default Announcement;

const Container = styled.div`
  height: 6vh;
  width: 98%;
  margin: auto;
  margin-top: 1rem;
  background-color: #1896ff;
  color: #eff8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
`;
