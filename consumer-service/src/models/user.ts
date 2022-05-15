import { model, Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const User = model("Users", UserSchema);

export default User;