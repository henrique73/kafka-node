import { userRegistrationMessage } from "../types/userRegistration";
import User from "../models/user";

export class UsersService {
    saveUser = async (recivedUser: userRegistrationMessage) => {
        try {
            const response = await User.create(recivedUser);
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
}
