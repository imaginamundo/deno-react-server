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
    </nav>
  );
}

export default Menu;
