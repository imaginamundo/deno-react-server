import { send } from "../deps.js";

export default async (context) => {
  await send(
    context,
    context.request.url.pathname,
    {
      root: `${Deno.cwd()}/public`,
    },
  )
    .catch((err) => console.log(err));
};
