import React /*, { useState } */ from "react";
import Menu from "../components/Menu.jsx";

function Page() {
  /**
   * React Hooks doesn't work because os mismatch of react and react-dom!
   */
  
  // const [ counter, setCounter ] = useState(0);
  return (
    <>
      <Menu />
      <h1>Hello world!</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nulla ullam facilis nisi, possimus distinctio! Ipsa, sapiente sequi libero minus quas, iure doloremque quos, vitae hic autem voluptates amet doloribus!</p>
      {/* <p>
        Clicked { counter } times.
      </p>
      <p>
        <button onClick={ () => setCounter(counter + 1) }>
          Add clicks
        </button>
      </p> */}
    </>
  );
}

export default Page;
