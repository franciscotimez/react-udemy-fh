import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

  const { counter, addCounter } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const { author, quote } = !!data && data[0];
  console.log({ counter, data, isLoading, hasError });

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          : (
            <blockquote className="blockquote text-end">
              <p className="mb-2">{quote}</p>
              <footer className="blockquote-footer">{author}</footer>
            </blockquote>
          )
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
