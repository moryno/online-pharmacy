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

export const userRow = [
  {
    id: 1,
    username: "Snow",
    age: 35,
    image:
      "https://media.gq.com/photos/5c9d404a8d459e781a1333b5/3:4/w_971,h_1295,c_limit/How-to-Get-Jon-Snow's-Hair-game-of-thrones-gq-grooming.jpg",
    status: "active",
    email: "1snow@email.com",
  },
  {
    id: 2,
    username: "Lannister",
    age: 42,
    image:
      "https://media1.popsugar-assets.com/files/thumbor/RQYPTMmt0ROgFeY0PJKwEpj0WfY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/05/22/909/n/1922283/9b57261c37ce12f9_acc43645df281a31957fe5a4f40dd4fab22f5087401b69fca0458dd00d3a7aebdafad4d5dadd7866b171294821f79b37.jpg",
    status: "passive",
    email: "cersi@email.com",
  },
  {
    id: 3,
    username: "Lannister",
    age: 45,
    image:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
    status: "active",
    email: "jamie@email.com",
  },
  {
    id: 4,
    username: "Stark",
    age: 16,
    image:
      "https://i.pinimg.com/originals/37/9a/7f/379a7f7fa7f6dd0797cfeffcc0b68f9c.jpg",
    status: "active",
    email: "arya@email.com",
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
