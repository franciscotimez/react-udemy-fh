import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (iter = 100) => {
  for (let i = 0; i < iter; i++) {
    console.log('Ahi vamos...');
  }
  console.log('Fin iteration');

  return `${iter} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, addCounter } = useCounter(0);

  const [show, setShow] = useState(true);

  const resultMemoStuff = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter: <small>{counter}</small> </h1>
      <hr />

      <h4>{resultMemoStuff}</h4>

      <button
        className="btn btn-primary"
        onClick={() => addCounter()}
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
