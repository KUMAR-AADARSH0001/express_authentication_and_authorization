const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String },
    description: { type: String },
    filePath: { type: String },
    likes: [],
    dislikes: [],
    comments: [],
    views: { type: Number, default: 0 },
    mentionedTo: [],
  },
  { timestamps: true }
);
module.exports = mongoose.model("PostUpload", PostsSchema);
