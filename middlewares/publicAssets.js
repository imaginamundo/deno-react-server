import { send } from "oak";

export default async (context) => {
  await send(
    context,
    context.request.url.pathname, {
      root: `${Deno.cwd()}/public`
    }
  );
}
