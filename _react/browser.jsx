import React, { ReactDOM } from "react";
// import { BrowserRouter } from "react-router-dom";

window.addEventListener("DOMContentLoaded", async () => {
  let routeUrl = `./pages${__route.path}`;
  if (__route.path.endsWith("/")) {
    routeUrl = routeUrl + __route.name;
  }

  routeUrl = routeUrl + ".js";

  const { default: Page } = await import(`${routeUrl}`);
  ReactDOM.hydrate(
    // <BrowserRouter>
    //   {__routes.map((route) => {
    //     return <Page props={initialProps} />;
    //   })}
    // </BrowserRouter>,
    <Page props={ __initialProps } />,
    // Page({ props: __initialProps }),
    document.getElementById("root"),
  );
});
