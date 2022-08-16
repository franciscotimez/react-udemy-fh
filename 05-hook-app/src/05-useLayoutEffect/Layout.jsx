import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const Layout = () => {

  const { counter, addCounter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];
  console.log({ counter, data, isLoading, hasError });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={author} quote={quote} />
      }

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => addCounter()}>
        Next Quote
      </button>

    </>
  );
};
