import { useCallback, useState } from "react";
import { ShowIncremet } from "./ShowIncremet";


export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  const incrementFather = useCallback(
    (inc) => {
      setCounter((value) => value + inc);
    }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncremet increment={incrementFather} />
    </>
  );
};
