"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("../services/userService"));
const response_helpers_1 = require("../utils/response-helpers");
const express_joi_validation_1 = require("express-joi-validation");
const user_creation_1 = __importDefault(require("../utils/joi/user-creation"));
const validator = express_joi_validation_1.createValidator();
const producerRoutes = express_1.default.Router();
const usersService = new userService_1.default();
producerRoutes.post("/user", validator.body(user_creation_1.default), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(response_helpers_1.success("Registration successful", yield usersService.userRegistration(req.body.username, req.body.password, req.body.email)));
    }
    catch (ex) {
        res.json(response_helpers_1.fail("Registration Failed", ex));
    }
}));
exports.default = producerRoutes;
//# sourceMappingURL=user-routes.js.map