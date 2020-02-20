import React from "react";
import Routes from "../components/Routes.jsx";

function Page(props) {
  return (
    <div>
      <h1>Route /dynamic-route</h1>
      <p>
        Get props on initial props by consulting <a href="https://pokeapi.co/">
          PokeApi
        </a>.
      </p>
      <h2>Getting the species details from squirtle</h2>
      <pre>{JSON.stringify(props.squirtle?.species, null, "\t")}</pre>
      <Routes />
    </div>
  );
}

Page.getInitialProps = async function(context) {
  const squirtle = await fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
    .then(res => res.json())
    .catch(() => ({}));

  return {
    squirtle
  };
};

export default Page;
