import styled from "@emotion/styled";
import { colors, typography } from "../styles";

const Label = styled.label``;

const StyledInput = styled.input`
  padding: 0.5rem;
  ${typography.lg};
  border-radius: 0.375rem;
  border: 1px solid ${colors.gray[400]};
  background-color: white;
  color: ${colors.gray.dark};
  width: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
`;

const Error = styled.p`
  color: red;
  padding-left: 1rem;
`;

function MedioInput({
  id,
  name,
  type = "date",
  placeholder,
  label,
  error,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error size="sm">{error}</Error>}
    </InputContainer>
  );
}

export default MedioInput;
