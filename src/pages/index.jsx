import React, { useState } from "react";
import Routes from "../components/Routes.jsx";

function Page() {
  return (
    <div>
      <h1>Initial page</h1>
      <p>Test for JSX</p>
      <h2>State</h2>
      <h2>Folder Structure:</h2>
      <ul>
        <li>
          <code>/public</code> · Static assets
        </li>
        <li>
          <code>/src</code> · Usually for main code
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
        </li>
      </ul>
      <h2>Assets test</h2>
      <p>In: <code>/public/jojo.jpg</code></p>
      <img src="/jojo.jpg" alt="Jojo's Bizarre Adventure" />

      <p>In: <code>/public/test/giorno-giovanna.png</code></p>
      <img src="/test/giorno-giovanna.png" alt="Giorno Giovanna" />
      <Routes />
    </div>
  );
}

Page.getInitialProps = () => {
  return {
    hello: "world!",
  };
};

export default Page;
