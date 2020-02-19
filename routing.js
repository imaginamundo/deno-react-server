import { Router } from "oak";
import routes from "./helpers/read_routes.js";
import { renderReact } from './helpers/render_react.jsx';

const { webRoutes, apiRoutes } = routes;

const router = new Router();

webRoutes.forEach(async route => {
  const file = await import(route.origin);
  router
    .get(route.path, context => {
      context.response.body = renderReact(file.default);
    });
});

export default router;
