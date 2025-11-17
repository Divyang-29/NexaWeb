import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Routes/route.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/nexaweb", router);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("Connected to Database!");
  } catch (err) {
    console.log("Failed to connect with DB", err);
  }
};

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
  connectDB();
});
