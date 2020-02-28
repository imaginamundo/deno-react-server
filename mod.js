import { Application } from "oak";
import { APP_HOST, APP_PORT } from "./config.js";
import routing from "./routing.js";
import routeNotFound from "./route_not_found.js";
import errorMiddleware from "./middlewares/error.js";
import logMiddleware from "./middlewares/log.js";
import timmingMiddleware from "./middlewares/timming.js";
import publicAssets from "./middlewares/publicAssets.js";
import "./helpers/bundle_javascript.js";

const app = new Application();

// Middlewares
app.use(errorMiddleware);
app.use(logMiddleware);
app.use(timmingMiddleware);

// Default routes
app.use(routing.routes());
app.use(routing.allowedMethods());

// Static assets
app.use(publicAssets);

// Not found
app.use(routeNotFound);

console.log(`Listening on port ${APP_HOST}:${APP_PORT}`);
await app.listen({ port: APP_PORT });
console.log("Finished");
