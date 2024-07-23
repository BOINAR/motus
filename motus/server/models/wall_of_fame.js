const mongoose = require("mongoose");

const wall_of_fameSchema = mongoose.Schema({
  id: Number,
  scores: Number,
  Login: Boolean,
});

const wall_of_fameModel = mongoose.model("wall_of_fame", userSchema);
module.exports = wall_of_fameModel;
