# Nextjs-ish Routing with Deno
Project with the objective to copy Next.js functionalities to Deno.js.

By the moment we only have the router based on pages, but more things will be added in the near future.

## Requirements
Deno :DDDDD

## Run
Type `make` on command line

## How It Works
You have the folder `/src/pages` and Deno will walk through the folder and create the routes using Oak (remove Oak after).

## Missing pieces:
- [ ] API routes;
- [ ] Styling;
- [ ] Get initial props;
- [ ] Client side nav (some route component, or anything);
- [ ] Serve static files;
- [ ] Customizable error page;
- [ ] Other things that I don't remember… :(

## Future plans
In the future this project seeks to create a React application with only two folders, and the rest will be under the hood with this repository, example:
You'll only need the folders that you will use, like the commons:
- `./src/pages`
- `./src/pages/api`
- `./src/components`
- `.import_map.json`

Add and with only these folders, run the command `deno react-server`, and then, Deno will make everything works out of the box, without configuring anything else.
