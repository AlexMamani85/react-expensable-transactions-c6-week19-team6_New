import styled from "@emotion/styled";
import Checkbox from "./Checkbox";
import { Text } from "./Typography";

const Container = styled.div`
  width: 100%;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  width: 100%;
`;

function CheckBoxGroup({ title, checkboxes, onCheck }) {

  function handleCheckedChange(event){
    onCheck(event.target.name)
  }
  return (
    <Container>
      <Text>{title}</Text>
      <CheckboxesContainer>
        {checkboxes.map((checkbox) => (
          <Checkbox 
            key={checkbox.name} 
            {...checkbox} 
            onChange={handleCheckedChange}
          />
        ))}
      </CheckboxesContainer>
    </Container>
  );
}

export default CheckBoxGroup;