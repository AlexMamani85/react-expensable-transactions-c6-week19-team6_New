import Input from "./Input";
import Button from "./Button"
import styled from "@emotion/styled";

const StyledForm = styled.form(`
  display: flex;
  gap: 8px
`)

function Search({ onFormSubmit }) {

  function handleSubmit(event){
    event.preventDefault()

    const { query } = event.target.elements
    onFormSubmit(query.value)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input placeholder="search" name="query" />
      <Button type="secondary">Search</Button>
    </StyledForm>
  )
}

export default Search;