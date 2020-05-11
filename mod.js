import { Application } from "oak";

import config from "./config.js";
import error from "./middlewares/error.js";
import log from "./middlewares/log.js";
import timming from "./middlewares/timming.js";
import router from "./middlewares/router.js";
import publicAssets from "./middlewares/publicAssets.js";
// import notFound from "./middlewares/notFound.js";
import './_bundler.js';

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

// Not found
// app.use(notFound);


console.log(`Listening on ${config.APP_HOST}:${config.APP_PORT}`);
await app.listen({ port: config.APP_PORT });