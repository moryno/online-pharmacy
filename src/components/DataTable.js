import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteProduct } from "../redux/apiCalls";

const DataTable = ({ data, columns, type, title }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  let actionColumn;
  let link;

  switch (type) {
    case "users":
      actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <ActionCell>
                <Link to={`/admin/users/${params.row.id}`}>
                  <ViewButton>View</ViewButton>
                </Link>
                <DeleteButton onClick={() => handleDelete(params.row.id)}>
                  Delete
                </DeleteButton>
              </ActionCell>
            );
          },
        },
      ];
      break;
    case "products":
      actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <ActionCell>
                <Link to={`/admin/products/${params.row.id}`}>
                  <ViewButton>View</ViewButton>
                </Link>
                <DeleteButton onClick={() => handleDelete(params.row.id)}>
                  Delete
                </DeleteButton>
              </ActionCell>
            );
          },
        },
      ];
      break;

    default:
      break;
  }

  switch (type) {
    case "users":
      link = `/admin/users/new`;
      break;
    case "products":
      link = `/admin/products/new`;
      break;

    default:
      break;
  }

  return (
    <Container>
      <TitleContainer>
        {title}
        <Link to={link}>
          <LinkText>Add New</LinkText>
        </Link>
      </TitleContainer>
      <DataGrid
        rows={data}
        columns={columns.concat(actionColumn)}
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

const TitleContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.25rem;
  color: gray;
  margin-bottom: 1.25rem;
`;

const LinkText = styled.span`
  color: green;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid green;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
