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
    const dataDir = path_1.default.join(currentDir, "data");
    if (!fs_1.default.existsSync(dataDir)) {
        fs_1.default.mkdirSync(dataDir, { recursive: true });
    }
    return dataDir;
};
exports.prerequisite = prerequisite;
(async () => {
    global.dataFolder = await (0, exports.prerequisite)();
})();
