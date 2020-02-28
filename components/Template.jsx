import React from "react";
import Html from "./Html.jsx";
import { ApplicationContextProvider } from "./ApplicationContext.jsx";

function Template({ children, props, route }) {
  const pageData = {
    __html: [
      `window.__initialProps = ${JSON.stringify(props)};`,
      `window.__route = ${JSON.stringify(route)};`
    ].join("")
  };

  return (
    <Html>
      <ApplicationContextProvider
        props={props}
        route={route}
      >
        <body id="root">
          {children}
          {/* Initial props and route */}
          <script dangerouslySetInnerHTML={pageData} />
        </body>
      </ApplicationContextProvider>
    </Html>
  );
}

export default Template;
