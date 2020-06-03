import { React } from "../deps.ts";

function Base({ children, props, routes, route }) {
  const pageData = {
    __html: [
      `window.__initialProps = ${JSON.stringify(props)};`,
      `window.__routes = ${JSON.stringify(routes)};`,
      `window.__route = ${JSON.stringify(route)};`,
    ].join(""),
  };

  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={pageData} />
        <script type="module" src="/.src/bundle.js" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export default Base;
