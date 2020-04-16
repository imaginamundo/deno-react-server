import React from "react";
import ReactDOMServer from "react-dom/server";
import Template from "../components/Template.jsx";

export async function renderReact(Page, context, routes, currentRoute) {
  let props = {};
  if (Page.getInitialProps) {
    const initialProps = await Page.getInitialProps(context);
    props = { ...initialProps };
  }

  return ReactDOMServer
    .renderToString(
      <Template
        props={props}
        routes={routes}
        currentRoute={currentRoute}
      >
        <Page {...props} />
      </Template>,
    );
}
