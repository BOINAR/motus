const mongoose = require("mongoose");

const motSchema = mongoose.Schema({
  id: Number,
  pseudo: String,
  password: String,
});

const motModel = mongoose.model("mots", userSchema);
module.exports = motModel;
