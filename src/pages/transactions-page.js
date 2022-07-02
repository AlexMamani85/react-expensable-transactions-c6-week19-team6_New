import styled from "@emotion/styled";
import { format, getMonth, getYear } from "date-fns";
import Categories from "../components/Categories/categories";
import Filter from "../components/Filter";
import MonthPicker from "../components/MonthPicker";
import { Heading, Text } from "../components/Typography";
import { typography } from "../styles";
import { Link, useLocation, useParams } from "react-router-dom";
import { useLocalStorage, useSearchParamsWithLocal } from "../hooks";
import Select from "../components/Select";


const sortBy = ["Year", "Title", "Score"];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;


const Title = styled.h1`
  ${typography.head.sm}
  font-weight: 600;
`;

const initialDate = {
  year: getYear(new Date()),
  month: getMonth(new Date()),
};

function TransactionsPage() {
  let params = useParams();
  let location = useLocation();

  const [searchParams, setSearchParams] = useSearchParamsWithLocal(
    initialDate,
    "expensable_date"
  );






  return (
    <Container>
    <Heading css={{ textAlign: "center" }}>Transactions</Heading>
    <Filter

    />
    <Select defaultValue="Sort by" options={sortBy}  />

    {/* {status === "pending" ? <Text>Loding movies</Text> : null}
    {status === "success"
      ? filteredMovies.map((movie) => <Movie key={movie.id} movie={movie} />)
      : null}
    {status === "error" ? <Text color={colors.red[500]}>{error}</Text> : null} */}
  </Container>
  );
}

export default TransactionsPage;
