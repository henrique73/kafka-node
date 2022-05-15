"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var options = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            title: "Producer Service",
            version: "1.0.0",
            description: "",
            contact: {
                name: "",
                url: ""
            }
        }
    },
    apis: ["./src/routes/*.ts"] // Path to the API docs
};
// Initialize swagger-jsdoc ->  validated swagger spec in json format
const swaggerSpec = swagger_jsdoc_1.default(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger-docs.js.map