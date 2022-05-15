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
const emailService_1 = require("../services/emailService");
class EmailHandler {
    constructor() {
        this.userRegistrationHandler = () => __awaiter(this, void 0, void 0, function* () {
            const emailService = new emailService_1.EmailService();
            try {
                console.log('a');
                const consumer = app_1.kafka.consumer({ groupId: 'email-user' });
                yield consumer.connect();
                yield consumer.subscribe({ topics: ['user'] });
                yield consumer.run({
                    eachBatchAutoResolve: true,
                    eachBatch: ({ batch, resolveOffset, heartbeat, }) => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        yield emailService.sendEmail((_a = batch.messages[2].value) === null || _a === void 0 ? void 0 : _a.toString());
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
exports.default = EmailHandler;
//# sourceMappingURL=email.js.map