// const [reactDiagnostics, reactOutput] = await Deno.bundle(
//   "https://unpkg.com/es-react@16.12.0/index.js",
// );

const [browserDiagnostics, browserOutput] = await Deno.bundle(
  "./react/browser.jsx",
);

const encoder = new TextEncoder();

await Deno.mkdir("public", { recursive: true });

// await Deno.writeFile("public/src/react.js", encoder.encode(reactOutput));
await Deno.writeFile("public/src/browser.js", encoder.encode(browserOutput));

console.log("Bundles generated");
