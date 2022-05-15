"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('joi');
const userCreationSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email()
        .required()
});
exports.default = userCreationSchema;
//# sourceMappingURL=user-creation.js.map