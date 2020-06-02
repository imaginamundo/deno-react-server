import { fs } from "./deps.js";

function formatRoute(origin) {
  console.log(origin);
  const pathsToIgnore = [
    "src/pages/_error.jsx",
  ];

  if (pathsToIgnore.includes(origin)) {
    return null;
  }

  const paths = origin.split("/");
  let [name, extension] = paths[paths.length - 1].split(".");

  paths.shift(); // Remove /src
  paths.shift(); // Remove /pages
  paths.pop(); // Remove file

  if (name !== "index") paths.push(name); // Add name to path without index if isn't index

  const path = "/" + paths.join("/");
  const type = paths[0] === "api" ? "api" : "page";

  origin = "/" + origin;

  return {
    name,
    path,
    extension,
    origin,
    type,
  };
}

const pageRoutes = [];
const apiRoutes = [];

// Walk thought pages
for await (const file of fs.walk("./src/pages")) {
  if (file.isFile) {
    const routeObject = formatRoute(file.path);
    if (routeObject) {
      if (routeObject.type === "page") {
        pageRoutes.push(routeObject);
      } else {
        apiRoutes.push(routeObject);
      }
    }
  }
}

export { pageRoutes, apiRoutes };
export default { pageRoutes, apiRoutes };
