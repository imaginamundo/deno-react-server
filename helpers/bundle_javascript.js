import { writeFileStr, exists, walk, copy } from "fs";

// Walk thought javascript files
for await (const file of walk("./src")) {
  if (file.info._isFile) {
    const permitedFiles = [
      "js",
      "jsx"
    ];

    const name = file.info.name.split('.').shift();
    const extension = file.info.name.split('.').pop();
    let path = file.filename.split('/');
    path.pop();
    path = path.join('/');
    const isPermitted = permitedFiles.includes(extension);

    if (isPermitted) {
      const origin = `./${ file.filename }`;
      const destiny = `./public/.${ path }/${ name }.js`;
      const destinyFolder = `./public/.${ path }`;

      const folderExist = await exists(destinyFolder);
      if (folderExist) {
        await copy(origin, destiny, { overwrite: true });
      } else {
        await Deno.mkdir(destinyFolder, { recursive: true });
        await copy(origin, destiny, { overwrite: true });

      }
      console.log(`${ destiny } generated`);
    }
  }
}

// Copy main.js
await copy('./client/main.js', './public/.src/main.js', { overwrite: true });
console.log("./public/.src/main.js generated");

// Generate import_map.json
const importMap = {
  imports: {
    "react": "https://dev.jspm.io/react@16.12.0",
    "react-dom": "https://dev.jspm.io/react-dom@16.12.0",
    "react-router-dom": "https://cdn.pika.dev/react-router-dom@^5.1.2"
  }
};
await writeFileStr('./public/import_map.json', JSON.stringify(importMap, null, 2));
console.log("./public/import_map.json generated");

export default {};
