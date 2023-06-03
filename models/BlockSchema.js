const mongoose = require("mongoose");

const BlockUserSchema = new mongoose.Schema(
  {
    blockerId: { type: String, required: true },
    blockedTo: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlockUserSchema", BlockUserSchema);
