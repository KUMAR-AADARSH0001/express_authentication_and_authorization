const mongoose = require("mongoose");

const DisLikeSchema = new mongoose.Schema(
  {
    Dislikedby: { type: String, required: true, timestamps: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DisLikeSchema", DisLikeSchema);
