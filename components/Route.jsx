import React from "react";
import { StaticRouter } from 'react-router-dom';

function Route({ children, location }) {
  return (
    <StaticRouter
      location={ location }
      context={{}}
    >
      {children}
    </StaticRouter>
  );
}

export default Route;
