import { userRegistrationMessage } from "../types/userRegistration";
import { kafka } from "../app";
import { UsersService } from "../services/userService";

export default class UsersHandler {
  userRegistrationHanlder = async () => {
    const userService = new UsersService();
    try {
      const consumer = kafka.consumer({ groupId: 'save-user' })

      await consumer.connect()

      await consumer.subscribe({ topics: ['user'] })

      await consumer.run({
        eachBatchAutoResolve: true,
        eachBatch: async ({
          batch,
          resolveOffset,
          heartbeat,
        }) => {
          const recivedMessage: userRegistrationMessage = {
            username: (batch.messages[0].value?.toString()),
            password: (batch.messages[1].value?.toString()),
            email: (batch.messages[2].value?.toString())
          }
          await userService.saveUser(recivedMessage);

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
