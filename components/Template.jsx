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

  /**
   * Missing static route
   */

  console.log(currentRoute);
  return (
    <Html>
      <ApplicationContextProvider
        props={props}
        currentRoute={currentRoute}
      >
        <body id="root">
          <Route location={currentRoute.path}>
            {children}
          </Route>
          {/* Initial props and route */}
          <script dangerouslySetInnerHTML={pageData} />
        </body>
      </ApplicationContextProvider>
    </Html>
  );
}

export default Template;
