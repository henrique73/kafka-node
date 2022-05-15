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
exports.EmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailService {
    constructor() {
        this.sendEmail = (userEmail) => __awaiter(this, void 0, void 0, function* () {
            try {
                let testAccount = yield nodemailer_1.default.createTestAccount();
                let transporter = nodemailer_1.default.createTransport({
                    host: "smtp.ethereal.email",
                    port: 587,
                    secure: false,
                    auth: {
                        user: testAccount.user,
                        pass: testAccount.pass,
                    },
                });
                let info = yield transporter.sendMail({
                    from: '<kafka@example.com>',
                    to: userEmail,
                    subject: "User Creation",
                    text: "Your user has been created",
                    html: "<b>Your user has been created</b>",
                });
                console.log("Preview URL: %s", nodemailer_1.default.getTestMessageUrl(info));
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
}
exports.EmailService = EmailService;
//# sourceMappingURL=emailService.js.map