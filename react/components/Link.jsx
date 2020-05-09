import React from "react";

function Link({ children, href }) {
  function goTo(e) {
    e.preventDefault();
    console.log("Click on fragment");
  }

  return (
    <React.Fragment onClick={goTo}>
      {children}
    </React.Fragment>
  );
}

export default Link;
