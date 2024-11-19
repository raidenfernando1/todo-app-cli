import fs from "fs";
import path from "path";

export const prerequisite = () => {
  const currentDir = path.resolve();
  const dataDir = path.join(currentDir, "data");

  // Check if the directory exists
  if (fs.existsSync(dataDir)) {
    console.log("Directory exists:", dataDir);
  } else {
    console.error("Directory does not exist:", dataDir);
  }
};
