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

  const [categories, setCategories] = useState([]);
  const uniqCategories=[]

  useEffect(() => {
    const datos = apiFetch("categories").then(JSON.stringify).then(console.log)
    console.log(datos)
    console.log("")
    console.log(datos.map((x)=>x.name))

  //a.then((b)=>b.map((x)=>x.name))

  }, []);


  

  return (
    <Container>
      <StyledButton onClick={() => setFilterVisible(!filterVisible)}>
        Filter Results
        <RiFilterFill />
      </StyledButton>
      <FilterContainer isVisible={filterVisible}>
        <CheckBoxGroup title="Genre" checkboxes={uniqCategories} onCheck={(value) => onCheck("genres", value)} />
        <CheckBoxGroup title="Release year" checkboxes={["Year2", "Title", "Score"]} onCheck={(value) => onCheck("years", value)} />
        <Text>Score</Text>
        <VoteContainer>

        </VoteContainer>
      </FilterContainer>
    </Container>
  );
}

export default Filter;
