import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import request from "../Helpers/requestMethods";

const List = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await request.get("/orders");
      setOrders(data);
    };
    getOrders();
  }, []);

  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Acer_Nitro_5_India_Launch.png",
      customer: "John Smith",
      date: "1 MArch",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Playstation 5",
      img: "https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-digital-edition-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",
      customer: "Susan Smith",
      date: "2 MArch",
      amount: 985,
      method: "Mpesa",
      status: "Pending",
    },
    {
      id: 3,
      product: "Playstation 5",
      img: "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg",
      customer: "Laban",
      date: "2 MArch",
      amount: 1985,
      method: "Cash",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tracking ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <RowWrapper>
                  <Image src={row.img} alt="productImage" />
                  {row.product}
                </RowWrapper>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

const RowWrapper = styled.article`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;
