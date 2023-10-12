import fs from 'fs-extra';
import path from 'path';

(async () => {
  const { globby } = await import("globby");

  const icons = await globby(["icons/*.svg"]);

  const exportFile = [
    `export const iconFileList = ${JSON.stringify(icons)};`,
    `const iconList = iconFileList.map(icon => icon.replace(/^icons\\//, '').replace(/\\.svg$/, ''));`,
    `export default iconList;`,
  ].join("\n");

  fs.writeFileSync(path.resolve(`./index.js`), exportFile);
})();
