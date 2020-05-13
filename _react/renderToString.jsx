import React from "react";
import ReactDomServer from "react-dom/server";

import Base from "./base.jsx";

function renderToString(Page, { props, route, routes }) {
  // const context = {};
  return ReactDomServer.renderToString(
    <Base props={props} route={route} routes={routes}>
      {/* <StaticRouter url={route.path} context={context}> */}
      <Page props={props} />
      {/* </StaticRouter> */}
    </Base>,
  );
}

export default renderToString;
