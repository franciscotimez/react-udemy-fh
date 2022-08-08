import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ initValue }) => {

  const [value, setValue] = useState(initValue);

  const handleAdd = () => {
    // setValue(value + 1);
    setValue( (v) => v + 1 );
  };

  const handleSub = () => {
    setValue( (v) => v - 1 );
  };

  const handleReset = () => {
    setValue( initValue );
  };


  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSub}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};


CounterApp.propTypes = {
  initValue: PropTypes.number.isRequired
};