"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = void 0;
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const kafkajs_1 = require("kafkajs");
const connection_1 = __importDefault(require("./database/connection"));
const user_1 = __importDefault(require("./controller/user"));
const email_1 = __importDefault(require("./controller/email"));
dotenv.config();
(0, connection_1.default)();
const app = (0, express_1.default)();
exports.kafka = new kafkajs_1.Kafka({
    clientId: 'node-crud-application',
    // Change broker to your configuration ->
    brokers: ['Henrique:9092'],
});
const emailHandler = new email_1.default();
emailHandler.userRegistrationHandler();
const userHandler = new user_1.default();
userHandler.userRegistrationHanlder();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
//# sourceMappingURL=app.js.map