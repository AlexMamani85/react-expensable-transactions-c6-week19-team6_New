import styled from "@emotion/styled";
import React from "react";
import { RiFilterFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { colors } from "../styles/colors";
import CheckBoxGroup from "./CheckboxGroup";
import Input from "./Input";
import { Text } from "./Typography";

import apiFetch from "../services/api-fetch";

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

const VoteContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
      setDatos(res.map((x)=>x.name));
      console.log(datos)});

    console.log(datos)
  //a.then((b)=>b.map((x)=>x.name))

  }, []);


  

  return (
    <Container>
      <StyledButton onClick={() => setFilterVisible(!filterVisible)}>
        Filter Results
        <RiFilterFill />
      </StyledButton>
      <FilterContainer isVisible={filterVisible}>
        <CheckBoxGroup title="Genre" checkboxes={datos} onCheck={(value) => onCheck("genres", value)} />
        <Text>Score</Text>
        <VoteContainer>

        </VoteContainer>
      </FilterContainer>
    </Container>
  );
}

export default Filter;
