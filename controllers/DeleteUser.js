const Post = require("../models/post");

const DeleteUser = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Post not found");
    }
    await post.remove();
    res.send("Post deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { DeleteUser };
