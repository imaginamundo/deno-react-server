import React from "react";

function CustomError({ props }) {
  return (
    <>
      <h1>My custom error :D</h1>
      <p>{props.error.message}</p>
    </>
  );
}

export default CustomError;
