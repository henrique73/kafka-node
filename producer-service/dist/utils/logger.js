"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
function log(scope, ...args) {
    debug_1.default(scope)(args);
}
exports.default = log;
//# sourceMappingURL=logger.js.map