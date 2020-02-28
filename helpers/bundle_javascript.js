/**
 * Bundle to do list:
 * - Generate import_map.json
 * - Create /public/.scr/main.js from /client/main.js
 * - Duplicate every javascript file inside /src to /public/.src
 * - If possible, minify files
 */

import { exists, walk, copy } from "fs";

// Walk thought pages
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
        await copy(origin, destiny);
      } else {
        await Deno.mkdir(destinyFolder, { recursive: true });
        await copy(origin, destiny);

      }
      // console.log(`${ destiny } generated`)
    }
  }
}

export default {};
