import React, { useState } from "react";
import Menu from "../components/Menu.jsx";

function Page() {
  const [ counter, setCounter ] = useState(0);
  return (
    <>
      <Menu />
      <h1>Hello world!</h1>
      <p>
        Clicked { counter } times.
      </p>
      <p>
        <button onClick={ () => setCounter(counter + 1) }>
          Add clicks
        </button>
      </p>
    </>
  );
}

export default Page;
