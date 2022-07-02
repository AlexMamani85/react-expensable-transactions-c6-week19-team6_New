import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;
  width: 100%;
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

function Input({ label, ...rest }) {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </div>
  );
}

export default Input;
