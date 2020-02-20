import { send } from "oak";

export default async context => {
  await send(context, context.request.path, {
    root: `${Deno.cwd()}/public`
  });
};
