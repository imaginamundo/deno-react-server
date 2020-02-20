import React from "react";
import Html from "./Html.jsx";
import { ApplicationContextProvider } from "./ApplicationContext.jsx";

function Template({ children }) {
  return (
    <Html>
      <ApplicationContextProvider>
        <body>
          {children}
        </body>
      </ApplicationContextProvider>
    </Html>
  );
}

export default Template;
