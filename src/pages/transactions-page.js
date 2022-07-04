import styled from "@emotion/styled";


import FilterForTransactions from "../components/Filter-for-transactions";
import { Heading } from "../components/Typography";
import {  useLocation, useParams } from "react-router-dom";
import CategoriesForTransactions from "../components/Categories/categories-for-transactions"
import { useLocalStorage, useSearchParamsWithLocal } from "../hooks";
import { getMonth, getYear } from "date-fns";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;



function TransactionsPage() {
  let params = useParams();
  let location = useLocation();


  const initialDate = {
    year: getYear(new Date()),
    month: getMonth(new Date()),
  };  
  
  const [searchParams, setSearchParams] = useSearchParamsWithLocal(initialDate,"expensable_date");
  
    const date = {
      year: +searchParams.get("year"),
      month: +searchParams.get("month"),
    };

  return (
    <Container>
    <Heading css={{ textAlign: "center" }}>Transactions</Heading>
    <FilterForTransactions

      />

                    <CategoriesForTransactions date={date} ></CategoriesForTransactions>

    <p></p>
      

    {/* {status === "pending" ? <Text>Loding movies</Text> : null}
    {status === "success"
      ? filteredMovies.map((movie) => <Movie key={movie.id} movie={movie} />)
      : null}
    {status === "error" ? <Text color={colors.red[500]}>{error}</Text> : null} */}
  </Container>
  );
}

export default TransactionsPage;
