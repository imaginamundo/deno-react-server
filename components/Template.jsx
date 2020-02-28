import React from "react";
import Html from "./Html.jsx";
import Route from "./Route.jsx";
import { ApplicationContextProvider } from "./ApplicationContext.jsx";

function Template({ children, props, routes, currentRoute }) {
  const pageData = {
    __html: [
      `window.__initialProps = ${JSON.stringify(props)};`,
      `window.__currentRoute = ${JSON.stringify(currentRoute)};`,
      `window.__routes = ${JSON.stringify(routes)};`
    ].join("")
  };

  return (
    <Html>
      <ApplicationContextProvider
        props={props}
        currentRoute={currentRoute}
      >
        <body>
          <div id="root">
            <Route location={currentRoute.path}>
              {children}
            </Route>
          </div>
          {/* Initial props and route */}
          <script dangerouslySetInnerHTML={pageData} />
        </body>
      </ApplicationContextProvider>
    </Html>
  );
}

export default Template;
