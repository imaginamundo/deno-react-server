import { pageRoutes } from "./_routes.js";

/**
 * The was an error trying to bunddle React and React DOM from pika.dev
 */

const [browserDiagnostics, browserOutput] = await Deno.bundle(
  "./_react/browser.jsx",
);

const encoder = new TextEncoder();

await Deno.mkdir("public", { recursive: true });

await Deno.writeFile("public/.src/bundle.js", encoder.encode(browserOutput));

pageRoutes.forEach(async (page) => {
  let importPath = page.path;
  let exportPath = page.path;

  if (!page.path.endsWith(page.name)) {
    if (page.path.endsWith("/")) {
      importPath = importPath + "index." + page.extension;
      exportPath = exportPath + "index";
    } else {
      importPath = importPath + "/index." + page.extension;
      exportPath = exportPath + "/index";
    }
  } else {
    importPath = importPath + "." + page.extension;
  }

  const [pageDiagnostics, pageOutput] = await Deno.bundle(
    `./src/pages${importPath}`,
  );

  const exportFolder = page.origin.split("/");
  exportFolder.shift();
  exportFolder.pop();

  await Deno.mkdir(`public/.${exportFolder.join("/")}`, { recursive: true });

  await Deno.writeFile(
    `./public/.src/pages${exportPath}.js`,
    encoder.encode(pageOutput),
  );
  console.log(`Generated ${page.path} at public/${exportFolder.join("/")}`);
});
