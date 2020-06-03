import { Router } from "../deps.ts";
import { pageRoutes, apiRoutes } from "../_routes.ts";
import renderToString from "../_react/renderToString.jsx";

const router = new Router();

pageRoutes.forEach(async (route) => {
  const file = await import(".." + route.origin);

  router
    .get(route.path, async (context) => {
      let props;
      if (file.default.getInitialProps) {
        props = await file.default.getInitialProps(context);
      } else {
        props = {};
      }

      context.response.body = await renderToString(
        file.default,
        {
          props,
          route,
          routes: pageRoutes,
        },
      );
    });
});

apiRoutes.forEach(async (route) => {
  const file = await import(".." + route.origin);

  router
    .all(route.path, file.default);
});

export default router;
