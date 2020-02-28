import React from "react";
import ReactDOM from "react-dom";
// Verify path after bundle files (it is located at window.__route)
import Page from "??";

/**
 * Hydrate React
 */
const root = document.getElementById("root");
const props = window.initialProps;

// Clean up
delete window.__initialProps;
delete window.__route;

ReactDOM.hydrate(<Page {...props} />, root);
