import styled from "styled-components";
import DashboardNavbar from "../components/DashboardNavbar";
import DataTable from "../components/DataTable";
import Sidebar from "../components/Sidebar";

const List = ({ data, columns, type, title }) => {
  return (
    <Container>
      <Sidebar />
      <ListContainer>
        <DashboardNavbar />
        <DataTable data={data} columns={columns} type={type} title={title} />
      </ListContainer>
    </Container>
  );
};

export default List;

const Container = styled.main`
  display: flex;
  color: #1e144f;
`;

const ListContainer = styled.section`
  flex: 6;
`;
