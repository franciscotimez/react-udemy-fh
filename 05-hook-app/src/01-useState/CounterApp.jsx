import { useState } from "react";


export const CounterApp = () => {

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const {counter1, counter2, counter3} = counter;

  const onHandleClick = ({target}) => {
    console.log(event);
    setCounter({
      ...counter,
      [target.name]: counter[target.name] + 1
    })
  }

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <button
        className="btn btn-primary"
        name="counter1"
        onClick={onHandleClick}
      >
        +1
      </button>
      <hr />
      <h1>Counter2: {counter2}</h1>
      <button
        className="btn btn-primary"
        name="counter2"
        onClick={onHandleClick}
      >
        +1
      </button>
      <hr />
      <h1>Counter3: {counter3}</h1>
      <button
        className="btn btn-primary"
        name="counter3"
        onClick={onHandleClick}
      >
        +1
      </button>
      <hr />
    </>
  );
};
