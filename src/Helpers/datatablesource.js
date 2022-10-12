// temporary data
import React from "react";
import styled from "styled-components";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <CellWithImage>
          <Image src={params.row.image} alt="avatar" />
          {params.row.username}
        </CellWithImage>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 70 },
  { field: "status", headerName: "Status", width: 100 },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <CellWithImage>
          <Image src={params.row.image} alt="productImage" />
          {params.row.title}
        </CellWithImage>
      );
    },
  },
  { field: "in_stock", headerName: "Stock", width: 200 },

  {
    field: "price",
    headerName: "Price",
    width: 160,
  },
];

const CellWithImage = styled.article`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.25rem;
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
