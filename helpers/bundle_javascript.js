import { writeFileStr, exists, walk, copy } from "fs";

// Walk thought javascript files
for await (const file of walk("./src")) {
  if (file.info._isFile) {
    const permitedFiles = [
      "js",
      "jsx"
    ];

    const name = file.info.name.split(".").shift();
    const extension = file.info.name.split(".").pop();
    let path = file.filename.split("/");
    path.pop();
    path = path.join("/");
    const isPermitted = permitedFiles.includes(extension);

    if (isPermitted) {
      const origin = `./${file.filename}`;
      const destiny = `./public/.${path}/${name}.js`;
      const destinyFolder = `./public/.${path}`;

      const folderExist = await exists(destinyFolder);
      if (folderExist) {
        await copy(origin, destiny, { overwrite: true });
      } else {
        await Deno.mkdir(destinyFolder, { recursive: true });
        await copy(origin, destiny, { overwrite: true });
      }
      console.log(`${destiny} generated`);
    }
  }
}

// Copy main.js
await copy("./client/main.js", "./public/.src/main.mjs", { overwrite: true });
console.log("./public/.src/main.js generated");


// Download Modules
if (!await exists("./public/.modules")) {
  await Deno.mkdir("./public/.modules", { recursive: true });
}

// React
const react = await fetch("https://dev.jspm.io/react@16.13.0")
  .then(res => res.text());

await writeFileStr(
  "./public/.modules/react@16.13.0.mjs",
  react
);

// React dom
const reactDom = await fetch("https://dev.jspm.io/react-dom@16.13.0")
  .then(res => res.text());

await writeFileStr(
  "./public/.modules/react-dom@16.13.0.mjs",
  reactDom
);

// React router dom
const reactRouterDom = await fetch(
  "https://cdn.pika.dev/react-router-dom@5.1.2"
)
  .then(res => res.text());

await writeFileStr(
  "./public/.modules/react-router-dom@5.1.2.mjs",
  reactRouterDom
);

// Generate import_map.json
const importMap = {
  imports: {
    "react": "/modules/react@16.13.0.js",
    "react-dom": "/modules/react-dom@16.13.0.js",
    "react-router-dom": "/react-router-dom@5.1.2.js"
  }
};

await writeFileStr(
  "./public/import_map.json",
  JSON.stringify(importMap, null, 2)
);

console.log("./public/import_map.json generated");

export default {};
