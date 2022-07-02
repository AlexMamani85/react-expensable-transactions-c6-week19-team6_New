import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  ${typography.text.sm}
`;

const SytledCheckbox = styled.input`
  width: 1em;
  height: 1em;
  accent-color: ${colors.stone[300]};
`;

export default function Checkbox({ id, name, label, ...rest }) {
  return (
    <Container>
      <SytledCheckbox type="checkbox" id={id || name} name={name} {...rest} />
      <label htmlFor={id || name}>{label || name}</label>
    </Container>
  );
}
