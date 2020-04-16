import React from "react";
import Html from "./Html.jsx";
import Route from "./Route.jsx";

function Template({ children, props, routes, currentRoute }) {
  const pageData = {
    __html: [
      `window.__initialProps = ${JSON.stringify(props)};`,
      `window.__currentRoute = ${JSON.stringify(currentRoute)};`,
      `window.__routes = ${JSON.stringify(routes)};`,
    ].join(""),
  };

  return (
    <Html>
      <head>
        <script
          dangerouslySetInnerHTML={ pageData }
        />
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossOrigin />
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossOrigin />
      <script src="/bundles/main.js" />
      </head>
      <body>
        <div id="root">
          <Route location={currentRoute.path}>
            {children}
          </Route>
        </div>
        {/* Initial props and route */}
        <script dangerouslySetInnerHTML={pageData} />
      </body>
    </Html>
  );
}

export default Template;
