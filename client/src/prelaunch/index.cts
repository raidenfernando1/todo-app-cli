import fs from "fs";
import path from "path";

export const prerequisite = async (): Promise<string> => {
  const currentDir = path.resolve();
  const dataDir = path.join(currentDir, "data");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return dataDir;
};

(async () => {
  global.dataFolder = await prerequisite();
})();
