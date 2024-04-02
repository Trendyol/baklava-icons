import fs from "fs-extra";
import path from "path";

(async () => {
  const { globby } = await import("globby");

  const icons = await globby(["icons/*.svg"]);
  const iconList = icons.map((icon) =>
    icon.replace(/^icons\//, "").replace(/\.svg$/, "")
  );

  const exportFile = [
    `export const iconFileList = ${JSON.stringify(icons)};`,
    `const iconList = ${JSON.stringify(iconList)};`,
    "export default iconList;",
  ].join("\n");

  const exportDefinitions = [
    `export const iconFileList = ${JSON.stringify(icons)} as const;`,
    `const iconList = ${JSON.stringify(iconList)} as const;`,
    "export type BaklavaIcon = (typeof iconList)[number];",
    "export default iconList;",
  ].join("\n");

  fs.writeFileSync(path.resolve("./index.js"), exportFile);
  fs.writeFileSync(path.resolve("./index.d.ts"), exportDefinitions);
})();
