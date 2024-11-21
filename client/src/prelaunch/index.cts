import fs from "fs";
import path from "path";

export const prerequisite = async (): Promise<string> => {
  const currentDir = path.resolve();
  const dataFolder = path.join(currentDir, "data");
  const dataCurrentDir = path.join(dataFolder, "userData.json");

  if (!fs.existsSync(dataFolder)) {
    try {
      fs.mkdirSync(dataFolder, { recursive: true });
      fs.writeFileSync(dataCurrentDir, "{}");
    } catch (e) {
      console.error("Error writing prelaunch files.");
      console.error(e);
    }
  }
  return dataFolder;
};

(async () => {
  global.dataFolder = await prerequisite();
})();
