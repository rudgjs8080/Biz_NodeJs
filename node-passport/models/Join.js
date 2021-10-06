import mongoose from "mongoose";

const userJoinSchema = new mongoose.Schema({
  userid: String,
  password: String,
  e_mail: String,
});

export default mongoose.model("Join", userJoinSchema);
