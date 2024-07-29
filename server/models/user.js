const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: Number,
  pseudo: String,
  password: String,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
