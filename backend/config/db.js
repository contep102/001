import mongoose from "mongoose";

export const CONNECT = async (req, res) => {
  try {
    const uuu = mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB connect!!");
  } catch (error) {
    console.error("MONGODB not connect!!");
    process.exit(1);
  }
};
