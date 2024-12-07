"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prerequisite = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prerequisite = async () => {
    const currentDir = path_1.default.resolve();
    const dataFolder = path_1.default.join(currentDir, "data");
    const dataCurrentDir = path_1.default.join(dataFolder, "userData.json");
    if (!fs_1.default.existsSync(dataFolder)) {
        try {
            fs_1.default.mkdirSync(dataFolder, { recursive: true });
            fs_1.default.writeFileSync(dataCurrentDir, "{}");
        }
        catch (e) {
            console.error("Error writing prelaunch files.");
            console.error(e);
        }
    }
    return dataFolder;
};
exports.prerequisite = prerequisite;
(async () => {
    global.dataFolder = await (0, exports.prerequisite)();
})();
