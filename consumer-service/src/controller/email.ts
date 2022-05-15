import { kafka } from "../app";
import { EmailService } from "../services/emailService";

export default class EmailHandler {
  userRegistrationHandler = async () => {
    const emailService = new EmailService();
    try {
      const consumer = kafka.consumer({ groupId: 'email-user' })

      await consumer.connect()

      await consumer.subscribe({ topics: ['user'] })

      await consumer.run({
        eachBatchAutoResolve: true,
        eachBatch: async ({
          batch,
          resolveOffset,
          heartbeat,
        }) => {
          await emailService.sendEmail(batch.messages[2].value?.toString());

          resolveOffset(batch.messages[0].offset);
          await heartbeat()
        },
      })
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}
