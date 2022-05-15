import { kafka } from "../app";
import nodemailer from 'nodemailer';

export class EmailService {
  sendEmail = async (userEmail: string | undefined) => {
    try {
      let testAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      let info = await transporter.sendMail({
        from: '<kafka@example.com>',
        to: userEmail,
        subject: "User Creation",
        text: "Your user has been created",
        html: "<b>Your user has been created</b>",
      });

      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}
