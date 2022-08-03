import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
