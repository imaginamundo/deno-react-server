import React from "react";
import Routes from "../components/Routes.jsx";

function Page() {
  return (
    <div>
      <h1>Initial page</h1>
      <p>Test for JSX</p>
      <h2>Folder Structure:</h2>
      <ul>
        <li>
          <code>/pages</code> · Folder for route creation
          <ul>
            <li>
              <code>index.jsx</code> · Route <b>/</b>
            </li>
            <li>
              <code>/route-folder</code> · Route <b>/route-folder</b>
              if there's an index.(jsx|tsx)
              <ul>
                <li>
                  <code>index.jsx</code> · Route <b>/route-folder</b>
                </li>
                <li>
                  <code>dynamic-inside-folder.jsx</code> · Route
                  <b>/route-folder/dynamic-inside-folder</b>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <Routes />
    </div>
  );
}

Page.getInitialProps = function() {
  return {
    key: "value"
  };
};

export default Page;
