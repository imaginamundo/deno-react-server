import React from "react";

function Menu() {
  return (
    <nav>
      <p><b>Page Routes</b></p>
      <p>
        <a href="/">- /</a>
      </p>
      <p>
        <a href="/hello">- /hello</a>
      </p>
      <p>
        <a href="/hello/world">- /hello/world</a>
      </p>
      <p><b>Api Routes</b></p>
      <p>
        <a href="/api/test">- /api/test</a>
      </p>
      <p><b>Public routes</b></p>
      <p>
        <a href="/test.html">- /test.html</a>
      </p>
      <p>
        <a href="/hello/world.js">- /hello/world.js</a>
      </p>
    </nav>
  );
}

export default Menu;
