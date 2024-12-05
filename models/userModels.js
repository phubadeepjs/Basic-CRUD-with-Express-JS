import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_id: String,
    name: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
