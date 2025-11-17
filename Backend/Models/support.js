import mongoose, { Schema } from "mongoose";

const ContactUsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  subject: { type: String, required: true },
  projectType: { type: String, required: true },
  budget: { type: Number, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Support", ContactUsSchema);
