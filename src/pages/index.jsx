import React from "react";
import Menu from "../components/Menu.jsx";

function Page({ props }) {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <Menu />
      <h1>Hello world!</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        nulla ullam facilis nisi, possimus distinctio! Ipsa, sapiente sequi
        libero minus quas, iure doloremque quos, vitae hic autem voluptates amet
        doloribus!
      </p>
      <h2>Get Initial Props</h2>
      <p>In the function add getInitialProps to your page component, like:</p>
      <pre>
        {`import React from 'react';

function Page({ props }) {
  return <pre>{ JSON.stringify(props, null, 2) }</pre>;
}

Page.getInitialProps = (context) => {
  return {
    hello: 'world!'
  };
}

export default Page;`}
      </pre>
      <p>
        This will give you the props from the server that you returned on
        getInitialProps function.
      </p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <h2>useState hook test</h2>
      <p>
        Clicked {counter} times.
      </p>
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Add clicks
        </button>
      </p>
    </>
  );
}

Page.getInitialProps = (context) => {
  return {
    hello: "world!",
  };
};

export default Page;
