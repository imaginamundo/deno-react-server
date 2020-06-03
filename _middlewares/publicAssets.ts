import { send } from "../deps.ts";

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
