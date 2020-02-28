import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Hydrate
const root = document.getElementById("root");
const props = window.initialProps;

// Clean up
delete window.__initialProps;
delete window.__routes;
delete window.__currentRoute;

ReactDOM.hydrate(<Page {...props} />, root);
