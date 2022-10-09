import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@material-ui/icons";
import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <Container>
      <Top>
        <Title>Total Revenue</Title>
        <MoreVert fontSize="small" />
      </Top>
      <Bottom>
        <FeaturedChart>
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </FeaturedChart>
        <Sales>Total sales made today</Sales>
        <Amount>Ksh6000</Amount>
        <Description>
          Previous transactions processing. Last payments may not be included.
        </Description>
        <SummaryContainer>
          <SummaryItem>
            <SummaryItemTitle>Target</SummaryItemTitle>
            <SummaryItemResult>
              <KeyboardArrowDown fontSize="small" style={{ color: "red" }} />
              <SummaryResultsAmount>Ksh12400</SummaryResultsAmount>
            </SummaryItemResult>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemTitle>Last Week</SummaryItemTitle>
            <SummaryItemResult>
              <KeyboardArrowUp fontSize="small" style={{ color: "green" }} />
              <SummaryResultsAmount>Ksh36400</SummaryResultsAmount>
            </SummaryItemResult>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemTitle>Last Month</SummaryItemTitle>
            <SummaryItemResult>
              <KeyboardArrowUp fontSize="small" style={{ color: "green" }} />
              <SummaryResultsAmount>Ksh120400</SummaryResultsAmount>
            </SummaryItemResult>
          </SummaryItem>
        </SummaryContainer>
      </Bottom>
    </Container>
  );
};

export default Featured;

const Container = styled.main`
  flex: 2;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
`;

const Top = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

const Bottom = styled.section`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const FeaturedChart = styled.article`
  height: 6.25rem;
  width: 6.25rem;
`;

const Sales = styled.p`
  font-weight: 500;
  color: gray;
`;

const Amount = styled.p`
  font-size: 1.875rem;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: gray;
  text-align: center;
`;

const SummaryContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SummaryItem = styled.article`
  text-align: center;
`;

const SummaryItemTitle = styled.article`
  font-size: 14px;
  color: gray;
`;

const SummaryItemResult = styled.article`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
`;

const SummaryResultsAmount = styled.article``;
