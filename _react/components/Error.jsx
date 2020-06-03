import { React } from "../../deps.ts";

function Page({ props }) {
  return (
    <>
      <h1>Error :(</h1>
      <p>{props.error.message}</p>
    </>
  );
}

export default Page;
