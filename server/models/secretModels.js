const mongoose = require("mongoose");

const secretSchema = mongoose.Schema({
  secret: {
    type: String,
    required: [true, "Please provide secret."],
  },
  email: {
    type: String,
    required: true,
  },
});

const Secret = mongoose.model("Secret", secretSchema);

module.exports = Secret;
