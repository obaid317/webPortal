const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  status: String,
});

const User = mongoose.model("users", UserSchema);

module.exports = mongoose.model("users", UserSchema);
