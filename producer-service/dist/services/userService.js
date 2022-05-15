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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
class UsersService {
    constructor() {
        this.userRegistration = (username, password, email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const producer = app_1.kafka.producer();
                yield producer.connect();
                yield producer.send({
                    topic: 'user',
                    messages: [
                        { key: 'username', value: username },
                        { key: 'password', value: password },
                        { key: 'email', value: email },
                    ],
                });
                console.log('Message sent successfully');
                yield producer.disconnect();
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = UsersService;
//# sourceMappingURL=userService.js.map