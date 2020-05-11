import React from "react";

function Base({ children, props, routes, route }) {
  const pageData = {
    __html: [
      `window.__initialProps = ${JSON.stringify(props)};`,
      `window.__routes = ${JSON.stringify(routes)};`,
      `window.__route = ${JSON.stringify(route)};`,
    ].join(""),
  };

  let verifiedPath;

  if (route.path.endsWith("/")) {
    verifiedPath = route.path;
  } else {
    verifiedPath = route.path + "/";
  }
  verifiedPath.substring(1);
  verifiedPath = "/." + verifiedPath;

  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={pageData} />
        <script type="module"
          src={`/.src/pages${verifiedPath}${route.name}.js`} />
        <script type="module" src="/.src/bundle.js" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}

export default Base;
