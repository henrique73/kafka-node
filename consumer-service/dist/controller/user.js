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
const userService_1 = require("../services/userService");
class UsersHandler {
    constructor() {
        this.userRegistrationHanlder = () => __awaiter(this, void 0, void 0, function* () {
            const userService = new userService_1.UsersService();
            try {
                const consumer = app_1.kafka.consumer({ groupId: 'save-user' });
                yield consumer.connect();
                yield consumer.subscribe({ topics: ['user'] });
                yield consumer.run({
                    eachBatchAutoResolve: true,
                    eachBatch: ({ batch, resolveOffset, heartbeat, }) => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b, _c;
                        const recivedMessage = {
                            username: ((_a = batch.messages[0].value) === null || _a === void 0 ? void 0 : _a.toString()),
                            password: ((_b = batch.messages[1].value) === null || _b === void 0 ? void 0 : _b.toString()),
                            email: ((_c = batch.messages[2].value) === null || _c === void 0 ? void 0 : _c.toString())
                        };
                        yield userService.saveUser(recivedMessage);
                        resolveOffset(batch.messages[0].offset);
                        yield heartbeat();
                    }),
                });
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
exports.default = UsersHandler;
//# sourceMappingURL=user.js.map