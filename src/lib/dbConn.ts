import mongoose from "mongoose";
const mongoDb_url = process.env.CONN_STRING as string;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(mongoDb_url, { dbName: "portfolio" });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("MongoDB connectin error:", err);
  }
};

export default connectDB;
