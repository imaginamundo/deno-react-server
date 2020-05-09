import React from "react";
import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";

import Base from "./base.jsx";

function renderToString(Page, { props, route }) {
  const context = {};
  return ReactDOMServer.renderToString(
    <Base route={route}>
      {/* <StaticRouter url={route.path} context={context}> */}
      <Page props={props} />
      {/* </StaticRouter> */}
    </Base>,
  );
}

export default renderToString;
