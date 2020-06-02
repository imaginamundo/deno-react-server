import { fs } from "./deps.js";
import { pageRoutes } from "./_routes.js";

const [browserDiagnostics, browserOutput] = await Deno.bundle(
  "./_react/browser.jsx",
);

let ErrorPage;
const customError = await fs.exists("src/pages/_error.jsx");

if (customError) {
  const [customErrorPageDiagnostics, customErrorPageOutput] = await Deno.bundle(
    "src/pages/_error.jsx",
  );
  ErrorPage = customErrorPageOutput;
} else {
  const [errorPageDiagnostics, errorPageOutput] = await Deno.bundle(
    "_react/components/Error.jsx",
  );
  ErrorPage = errorPageOutput;
}

const encoder = new TextEncoder();

await Deno.mkdir("public/.src/pages", { recursive: true });

await Deno.writeFile("public/.src/bundle.js", encoder.encode(browserOutput));
await Deno.writeFile(
  "public/.src/pages/_error.js",
  encoder.encode(ErrorPage),
);

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
    {},
    { lib: ["react"] },
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
