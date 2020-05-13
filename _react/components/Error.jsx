import React from "react";

function Page({ props }) {
  return (
    <>
      <h1>Error :(</h1>
      <p>{props.error.message}</p>
    </>
  );
}

export default Page;
