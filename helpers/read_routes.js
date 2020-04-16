import { walk } from "fs";

function formatRoute(origin) {
  const paths = origin.split("/");
  let [name, extension] = paths[paths.length - 1].split(".");

  paths.shift(); // Remove /src
  paths.shift(); // Remove /pages
  paths.pop(); // Remove file

  if (name !== "index") paths.push(name); // Add name to path without index if isn't index

  const path = "/" + paths.join("/");
  const type = paths[0] === "api" ? "api" : "page";
  origin = "./" + origin;

  return {
    name,
    path,
    extension,
    origin,
    type,
  };
}

const webRoutes = [];
const apiRoutes = [];

// Walk thought pages
for await (const file of walk("./src/pages")) {
  if (file.info.isFile()) {
    const routeObject = formatRoute(file.filename);
    if (routeObject.type === "page") {
      webRoutes.push(routeObject);
    } else {
      apiRoutes.push(routeObject);
    }
  }
}

export default { webRoutes, apiRoutes };
