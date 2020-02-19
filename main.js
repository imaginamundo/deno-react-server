import { Application } from "oak";
import { APP_HOST, APP_PORT } from "./config.js";
import routing from "./routing.js";
import routeNotFound from "./route_not_found.js";
import errorMiddleware from "./middlewares/error.js";
import logMiddleware from "./middlewares/log.js";
import timmingMiddleware from "./middlewares/timming.js";

const app = new Application();

app.use(errorMiddleware);
app.use(logMiddleware);
app.use(timmingMiddleware);
app.use(routing.routes());
app.use(routing.allowedMethods());
app.use(routeNotFound);

console.log(`Listening on port ${APP_HOST}:${APP_PORT}`);
await app.listen({ port: APP_PORT });
console.log("Finished");
