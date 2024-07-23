var mongoose = require("mongoose");
require("dotenv").config();

var options = {
  connectTimeoutMS: 5000,
};

mongoose
  .connect(`${process.env.MONGODB_CONNECTION_STRING}`, options)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
