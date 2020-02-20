import React from "react";
import ReactDOMServer from "react-dom/server";
import Template from "../components/Template.jsx";

export function renderReact(Page) {
  return ReactDOMServer
    .renderToString(
      <Template>
        <Page />
      </Template>
    );
}
