import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

  const { counter, addCounter, subsCounter, resetCounter } = useCounter();

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        className="btn btn-primary"
        onClick={() => addCounter()}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={resetCounter}
        >
        Reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() => subsCounter()}
      >
        +1
      </button>
    </>
  );
};
