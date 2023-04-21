const PostsSchema = require("../models/PostSchema.js");
const DisLikeSchema = require("../models/DisLikeSchema.js");

const DisLikePosts = async (req, res) => {
  try {
    // TAKING POST ID FROM PARAMS
    const postId = req.params.postId;
    console.log(postId);
    // SEARCHING POST IN POSTSCHEMA DATABASE
    const existingPost = await PostsSchema.findById(postId);
    console.log(existingPost.dislikes);
    if (!existingPost) {
      res.status(404).send("Post not found");
    } else {
      // CREATING NEW DISLIKE WITH TAKING VALUE FROM REQ.BODY
      const dislikes_detail = new DisLikeSchema({
        dislikedby: req.payload.id,
      });
      // APPENDING NEW DISLIKE DETAILS TO EXISTING POST DATABASE
      existingPost.dislikes.push(dislikes_detail);
      await existingPost.save();
      res
        .status(200)
        .json({ success: true, message: "Your DisLike Saveed..." });
    }
    console.log(existingPost);
    console.log(existingPost.dislikes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { DisLikePosts };
