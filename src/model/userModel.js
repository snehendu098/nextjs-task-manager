import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, requred: [true, "Email is required"] },
  password: { type: String, required: [true, "Password is required"] },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
