import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

// Hydrate
const root = document.getElementById("root");
const props = window.initialProps;

console.log("Show!");
console.log(React);

// async function dynamicImportPage(file) {
//   const Page = await import(file);
//   console.log(Page);
//   return <Page />;
// }

// function RouteMap({ routes }) {
//   return (
//     <Switch>
//       {routes.map(route => {
//         return (
//           <Route
//             path={route.path}
//             component={await dynamicImportPage(route.origin)}
//           >
//             {useRouteMatch(route.path) &&
//               dynamicImportPage(route.origin)}
//           </Route>
//         );
//       })}
//     </Switch>
//   );
// }

// ReactDOM.hydrate(
//   <Router>
//     <RouteMap routes={window.__routes} />
//   </Router>,
//   root
// );

// Clean up
delete window.__initialProps;
delete window.__routes;
delete window.__currentRoute;
