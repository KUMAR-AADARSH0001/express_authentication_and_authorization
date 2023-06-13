const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    is_role: { type: String, required: true },
    is_verified: { type: String, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userModel);
