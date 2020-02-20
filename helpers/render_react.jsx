import React from "react";
import ReactDOMServer from "react-dom/server";
import Template from "../components/Template.jsx";

export async function renderReact(context, Page) {
  let props = {};
  if (Page.getInitialProps) {
    const initialProps = await Page.getInitialProps(context);
    props = { ...initialProps };
  }

  return ReactDOMServer
    .renderToString(
      <Template>
        <Page {...props} />
      </Template>
    );
}
