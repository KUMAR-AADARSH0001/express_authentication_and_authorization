const PostsSchema = require("../models/PostSchema.js");
const LikeSchema = require("../models/LikeSchema.js");

const LikePosts = async (req, res) => {
  try {
    // TAKING POST ID FROM PARAMS
    const postId = req.params.postId;
    // SEARCHING POST IN POSTSCHEMA DATABASE
    const existingPost = await PostsSchema.findById(postId);
    if (!existingPost) {
      res.status(404).send("Post not found");
    } else {
      // CREATING NEW LIKE WITH TAKING VALUE FROM REQ.BODY
      const likes_detail = new LikeSchema({
        likedby: req.payload.id,
      });
      // APPENDING NEW LIKE DETAILS TO EXISTING POST DATABASE
      existingPost.likes.push(likes_detail);
      await existingPost.save();
      res.status(200).json({ success: true, message: "Your Like Saveed..." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { LikePosts };
