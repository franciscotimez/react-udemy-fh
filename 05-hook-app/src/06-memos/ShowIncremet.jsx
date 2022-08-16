import { memo } from "react";


export const ShowIncremet = memo(({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <button
      className="btn btn-primary"
      onClick={() => increment(5)}
    >
      +5
    </button>
  );
});
