import { writeFileStr, exists, walk, copy } from "fs";

for await (const file of walk("./src")) {
  const permitedFiles = ["js", "jsx"];
  if (file.info.isFile()) {
    let name = file.info.name.split(".");
    const extension = name.pop();
    name = name.join('.');

    let path = file.filename.split("/");
    path.pop();
    path = path.join("/");

    const isPermitted = permitedFiles.includes(extension);

    if (isPermitted) {
      const destinyFolder = `./public/bundles/${path}`;

      const [diagnostics, emit] = await Deno.bundle(`./${ file.filename }`);
      if (diagnostics !== null) {
        console.log(diagnostics);
        Deno.exit();
      }

      const folderExist = await exists(destinyFolder);

      if (!folderExist) {
        await Deno.mkdir(destinyFolder, { recursive: true })
      }
      console.log(`${destinyFolder}/${file.info.name}`);
      await writeFileStr(`${destinyFolder}/${name}.js`, emit);
    }
  }
}

// Copy main.js
await copy("./client/main.js", "./public/bundles/main.js", { overwrite: true });
console.log("../public/.src/main.js generated");

// // Download Modules
// if (!await exists("../public/.modules")) {
//   await Deno.mkdir("../public/.modules", { recursive: true });
// }

// // React
// const react = await fetch("https://dev.jspm.io/react@16.13.1")
//   .then((res) => res.text());

// await writeFileStr(
//   "../public/.modules/react@16.13.0.mjs",
//   react,
// );

// // React dom
// const reactDom = await fetch("https://dev.jspm.io/react-dom@16.13.1")
//   .then((res) => res.text());

// await writeFileStr(
//   "./public/.modules/react-dom@16.13.0.mjs",
//   reactDom,
// );

// // React router dom
// const reactRouterDom = await fetch(
//   "https://cdn.pika.dev/react-router-dom@5.1.2",
// )
//   .then((res) => res.text());

// await writeFileStr(
//   "./public/.modules/react-router-dom@5.1.2.mjs",
//   reactRouterDom,
// );

// // Generate import_map.json
// const importMap = {
//   imports: {
//     "react": "/modules/react@16.13.1.js",
//     "react-dom": "/modules/react-dom@16.13.1.js",
//     "react-router-dom": "/react-router-dom@5.1.2.js",
//   },
// };

// await writeFileStr(
//   "./public/import_map.json",
//   JSON.stringify(importMap, null, 2),
// );

// console.log("./public/import_map.json generated");