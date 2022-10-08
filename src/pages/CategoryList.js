import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import { Footer } from "../components/Footer";
import { mobile } from "../responsive";
import { useParams } from "react-router-dom";
import { useState } from "react";

const CategoryList = ({ input }) => {
  const { category } = useParams();
  const [filters, setFilters] = useState("");
  const [sort, setSort] = useState("");

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select
            name="brands"
            onChange={(event) => setFilters(event.target.value)}
          >
            <Option value="latest">Latest</Option>
            <Option value="oldest">Oldest</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value={"all"}>All</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={category} filters={filters} sort={sort} />

      <Footer />
    </Container>
  );
};

export default CategoryList;

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0" })};
`;

const Option = styled.option``;
