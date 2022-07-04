import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid ${colors.gray[200]};
  border-radius: 6px;
  width: 100%;
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

function Select({ label, options, defaultValue, ...rest }) {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect {...rest} defaultValue={defaultValue}>
        {defaultValue && <option disabled hidden>{defaultValue}</option>}
        {options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Select;
