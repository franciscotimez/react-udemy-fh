import { useEffect, useState } from "react";

export const Message = () => {

  const [cords, setCords] = useState();

  useEffect(() => {
    const onMouseEvent = ({ x, y }) => {
      const cords = { x, y };
      setCords(cords);
    };

    window.addEventListener('mousemove', onMouseEvent);
    return () => {
      window.removeEventListener('mousemove', onMouseEvent);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>{JSON.stringify(cords)}</p>
    </>
  );
};
