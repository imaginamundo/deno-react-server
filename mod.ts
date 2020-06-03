import { Application } from "./deps.ts";

import config from "./config.ts";
import error from "./_middlewares/error.ts";
import log from "./_middlewares/log.ts";
import timming from "./_middlewares/timming.ts";
import router from "./_middlewares/router.ts";
import publicAssets from "./_middlewares/publicAssets.ts";
import "./_bundler.ts";

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
