import React from 'react';
import ReactDOMServer from "react-dom/server";

function Template({ children }) {
  return (
    <div>
      { children }
    </div>
  );
};

export function renderReact(Page) {
  return `<!DOCTYPE html>
  ${
    ReactDOMServer
    .renderToString(
      <Template>
        <Page />
      </Template>
    )
  }`
};