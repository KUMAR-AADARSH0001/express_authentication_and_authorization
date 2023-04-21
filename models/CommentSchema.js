const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    commentsBy: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CommentSchema", CommentSchema);
