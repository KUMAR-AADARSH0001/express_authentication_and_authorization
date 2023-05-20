const PostsSchema = require("../models/PostSchema.js");
const LikeSchema = require("../models/LikeSchema.js");

const LikePosts = async (req, res) => {
  try {
    // TAKING POST ID FROM PARAMS
    const postId = req.params.postId;
    // TAKING LIKERS ID FROM TOKEN
    const likerId = req.payload.id;
    // SEARCHING POST FROM POSTSCHEMA DATABASE
    const existingPost = await PostsSchema.findById(postId);
    if (!existingPost) {
      res.status(404).send("Post not found");
    } else {
      // CHECKING LIKE ARRAY IS EMPTY OR NOT
      if (existingPost.likes.length !== 0) {
        // RETRIEVING ALL LIKE FROM ARRAY
        for (let all = 0; all < existingPost.likes.length; all++) {
          if (existingPost.likes[all].likedby !== likerId) {
            // CREATING NEW LIKE WITH TAKING VALUE FROM REQ.BODY
            const likes_detail = new LikeSchema({
              likedby: likerId,
            });
            // APPENDING NEW LIKE DETAILS TO EXISTING POST DATABASE
            existingPost.likes.push(likes_detail);
            await existingPost.save();
            res
              .status(200)
              .json({ success: true, message: "Your Like Saveed..." });
          } else {
            // EMPLIMENT REMOVE FROM DATABASE HERRE
            existingPost.likes.splice(all, 1);
            await existingPost.save();
            res
              .status(202)
              .json({ success: true, message: "Your UnLike Saved..." });
          }
        }
      } else {
        // CREATING NEW LIKE WITH TAKING VALUE FROM REQ.BODY
        const likes_detail = new LikeSchema({
          likedby: likerId,
        });
        // APPENDING NEW LIKE DETAILS TO EXISTING POST DATABASE
        existingPost.likes.push(likes_detail);
        await existingPost.save();
        res.status(200).json({ success: true, message: "Your Like Saveed..." });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { LikePosts };
