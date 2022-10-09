import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userColumns, userRow } from "../datatablesource";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <ActionCell>
            <Link to="/admin/users/test">
              <ViewButton>View</ViewButton>
            </Link>
            <DeleteButton>Delete</DeleteButton>
          </ActionCell>
        );
      },
    },
  ];
  return (
    <Container>
      <DataGrid
        rows={userRow}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default DataTable;

const Container = styled.main`
  height: 37.5rem;
  padding: 1.25rem;
`;

const ActionCell = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ViewButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: green;
  background-color: rgba(0, 128, 0, 0.2);
  cursor: pointer;
`;

const DeleteButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  background-color: rgba(255, 0, 0, 0.2);
  cursor: pointer;
`;
