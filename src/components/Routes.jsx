import React from 'react';

function Routes() {
  return (
    <>
      <h2>Routes:</h2>
      <ul>
        <li>
          <a href="/">/</a>
        </li>
        <li>
          <a href="/dynamic-route">/dynamic-route</a>
        </li>
        <li>
          <a href="/route-folder">/route-folder</a>
        </li>
        <li>
          <a href="/route-folder/dynamic-inside-folder">/route-folder/dynamic-inside-folder</a>
        </li>
      </ul>
    </>
  )
};

export default Routes;