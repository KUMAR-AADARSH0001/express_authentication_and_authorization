const CommentSchema = require("../models/CommentSchema.js");
const PostsSchema = require("../models/PostSchema.js");

// COMMENTS
const CommentPosts = async (req, res) => {
  try {
    // TAKING POST ID FROM PARAMS
    const postId = req.params.postId;
    // SEARCHING POST IN POSTSCHEMA DATABASE
    const existingPost = await PostsSchema.findById(postId);
    if (!existingPost) {
      res.status(404).send("Post not found");
    } else {
      // CREATING NEW COMMENT WITH TAKING VALUE FROM REQ.BODY
      const comments_detail = new CommentSchema({
        commentdby: req.payload.id,
        content: req.body.content,
      });
      // APPENDING NEW COMMENT DETAILS TO EXISTING POST DATABASE
      existingPost.comments.push(comments_detail);
      await existingPost.save();
      res.status(200).json({ success: true, message: "Your Comment Saved..." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { CommentPosts };
