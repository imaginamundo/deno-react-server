import React, { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";

window.addEventListener("DOMContentLoaded", async () => {
  ReactDOM.hydrate(
    <BrowserRouter>
      {__routes.map((route) => {
        const { default: Page } = await import(`${route.origin}`);
        <Page props={initialProps} />;
      })}
    </BrowserRouter>,
    document.getElementById("root"),
  );

  delete window.__initialProps;
  delete window.__routes;
  delete window.__route;
});
