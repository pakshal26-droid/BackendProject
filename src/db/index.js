import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//connecting to MongoDb
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected DB_HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection Error", error);
    process.exit(1);
  }
};

export default connectDB;
