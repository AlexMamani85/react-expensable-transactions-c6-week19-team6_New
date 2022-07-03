import styled from "@emotion/styled";
import React from "react";
import { RiFilterFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { colors } from "../styles/colors";
import CheckBoxGroup from "./CheckboxGroup";
import Input from "./input";
import { Text } from "./Typography";
import MedioInput from "./medio-input"
import apiFetch from "../services/api-fetch";
import { typography } from "../styles";

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1rem;
  color: ${colors.gray[500]};
  cursor: pointer;
  border-radius: 0.5rem;

  &:active,
  &:hover {
    background-color: ${colors.gray[100]};
  }
`;

const BoxData = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`;

const VoteContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h1`
  ${typography.head.sm}
  font-weight: 600;
`;

const FilterContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

function Filter({ filters, genres, years, onInputChange, onCheck }) {
  const [filterVisible, setFilterVisible] = React.useState(false);
  const [datos, setDatos] = useState([])
  const [categories, setCategories] = useState([]);
  const uniqCategories=[]

  useEffect(() => {
    apiFetch("categories").then((res) => {
      setCategories(res.map((x)=>x.name));
      setDatos(categories);
    });
  }, []);


  

  return (
    <Container>
      <Title>Categories</Title>
      <StyledButton onClick={() => setFilterVisible(!filterVisible)}>
        Filter Results
        <RiFilterFill />
      </StyledButton>
      <FilterContainer isVisible={filterVisible}>
        <CheckBoxGroup title="Genre" checkboxes={categories} onCheck={(value) => onCheck("genres", value)} />
        <Text>Amount</Text>
        <BoxData>
          <MedioInput label="Min" type="text"></MedioInput>
          <MedioInput label="Max" type="text"></MedioInput>
        </BoxData>
        <Text>Date</Text>
        <BoxData>
          <MedioInput label="From" type="date"></MedioInput>
          <MedioInput label="To" type="date"></MedioInput>
        </BoxData>


        <VoteContainer>

        </VoteContainer>
      </FilterContainer>
    </Container>
  );
}

export default Filter;
