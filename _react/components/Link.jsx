import { React } from "../../deps.ts";

function Link({ children, href }) {
  function goTo(e) {
    e.preventDefault();
    alert("Click on fragment");
  }

  return (
    <React.Fragment onClick={goTo}>
      {children}
    </React.Fragment>
  );
}

export default Link;
