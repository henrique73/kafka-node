import { kafka } from '../app'

export default class UsersService {
    userRegistration = async (username: string, password: string, email: string) => {
        try {
            const producer = kafka.producer()
            await producer.connect()

            await producer.send({
                topic: 'user',
                messages: [
                    { key: 'username', value: username },
                    { key: 'password', value: password },
                    { key: 'email', value: email },
                ],
            })
            console.log('Message sent successfully');

            await producer.disconnect()
        } catch (error) {
            console.log(error)
            throw error;
        }
    };
}
