import mongoose from "mongoose";
export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (error) {
    throw new Error("Db connection faild");
  }
};
