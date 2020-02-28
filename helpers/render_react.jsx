import React from "react";
import ReactDOMServer from "react-dom/server";
import Template from "../components/Template.jsx";

export async function renderReact(Page, context, route) {
  let props = {};
  if (Page.getInitialProps) {
    const initialProps = await Page.getInitialProps(context);
    props = { ...initialProps };
  }

  return ReactDOMServer
    .renderToStaticMarkup(
      <Template
        props={props}
        route={route}
      >
        <Page {...props} />
      </Template>
    );
}
