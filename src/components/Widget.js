import {
  AccountBalanceOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Widget = ({ type }) => {
  let data;
  // temporary data
  const amount = 1200;
  const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlined
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        link: "See all orders",
        icon: (
          <ShoppingCartOutlined
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See all earnings",
        icon: (
          <MonetizationOnOutlined
            style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See all balances",
        icon: (
          <AccountBalanceOutlined
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <Container>
      <Left>
        <Title>{data.title}</Title>
        <Counter>
          {data.isMoney && "Ksh"} {amount}
        </Counter>
        <Link>{data.link}</Link>
      </Left>
      <Right>
        <Percentage>
          <KeyboardArrowUp />
          {percentage}
        </Percentage>
        <Icon>{data.icon}</Icon>
      </Right>
    </Container>
  );
};

export default Widget;

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  border-radius: 10px;
  height: 6.25rem;
`;

const Left = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: #1896ff;
`;

const Counter = styled.span`
  font-size: 1.75rem;
  font-weight: 300;
`;

const Link = styled.span`
  font-size: 0.875rem;
  border-bottom: 1px solid gray;
  width: max-content;
`;

const Right = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Percentage = styled.article`
  display: flex;
  font-size: 0.875rem;
  align-items: center;
  color: green;
`;

const Icon = styled.div`
  font-size: 1.125rem;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border-radius: 5px;
`;
