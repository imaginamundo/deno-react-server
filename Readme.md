# Nextjs-ish Routing with Deno
Project with the objective to copy Next.js functionalities to Deno.js.

By the moment we only have the router based on pages, but more things will be added in the near future.

## Requirements
Deno 1.0.0-rc2

Go to https://deno.land to see how to install Deno.

## Run
Type `make` on command line

## Current folder public and src are only for testing purposes!

## Routing
Deno will walk through the folder `/src/pages` and create the routes using Oak (remove Oak after).

## Public Assets folder
The folder `/public` in the root of the application will host you static assets.

## Dynamic API routes
The folder `/src/pages/api` will return an nom component, you can use it as a simple API creation method.
``` javascript
// index.js
export default function (context) {
  return context.response.body = {
    Hello: "World!",
    method: context.request.method
  };
}
```

When you make GET a request at /api it will return
``` json
{
  "Hello": "World!",
  "method": "GET"
}
```

## API Context
The context param that is received from the handler, is the same that Oak (https://github.com/oakserver/oak) is using.

## Missing pieces:
- [ ] Remove folders `/public` and `/src` (These files are examples to show how this project works);
- [X] API routes;
- [ ] Styling;
- [ ] Get initial props;
- [ ] Client side nav (some route component, or anything);
- [X] Serve static files;
- [ ] Customizable error page;
- [ ] Helpers components (Head, Link);
- [ ] Other things that I don't remember… :(

## Future plans
In the future this project seeks to create a React application with only two folders, and the rest will be under the hood with this repository, example:
You'll only need the folders that you will use, like the commons:
- `./public`
- `./src/pages`
- `./src/pages/api`
- `./src/components`
- `.importmap.json`

Add and with only these folders, run the command `deno react-server`, and then, Deno will make everything works out of the box, without configuring anything else.
