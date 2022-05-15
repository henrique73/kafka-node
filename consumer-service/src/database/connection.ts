import { connect } from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGO_CONNECTION) {
      await connect(process.env.MONGO_CONNECTION)
    } else {
      throw new Error('MONGO_CONNECTION env not defined');
    };
  } catch (err) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

export default connectDB;