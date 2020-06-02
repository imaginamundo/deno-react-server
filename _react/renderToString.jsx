import { React, ReactDomServer } from "../deps.js";
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
