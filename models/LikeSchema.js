const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema(
  {
    likedby: { type: String, required: true, timestamps: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LikeSchema", LikeSchema);
