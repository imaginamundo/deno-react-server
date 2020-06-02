import { Application } from "./deps.js";

import config from "./config.js";
import error from "./_middlewares/error.js";
import log from "./_middlewares/log.js";
import timming from "./_middlewares/timming.js";
import router from "./_middlewares/router.js";
import publicAssets from "./_middlewares/publicAssets.js";
import "./_bundler.js";

const app = new Application();

// Middlewares
app.use(log);
app.use(timming);
app.use(error);

// Router
app.use(router.routes());
app.use(router.allowedMethods());

// Public
app.use(publicAssets);

console.log(`Listening on ${config.APP_HOST}:${config.APP_PORT}`);
await app.listen({ port: config.APP_PORT });
