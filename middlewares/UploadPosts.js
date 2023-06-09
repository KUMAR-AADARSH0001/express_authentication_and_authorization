const userModel = require("../models/UserSchema.js");
const PostsSchema = require("../models/PostSchema.js");

const UploadPosts = async (req, res) => {
  try {
    const email = req.payload.email;
    const existUser = await userModel.find({ email: email });
    // CHECKING USER IS EXISTING USER OR NOT
    if (!existUser) {
      res.status(404).json({ message: "User Not Found" });
    } else {
      const uplaod = await new PostsSchema({
        userId: req.payload.id,
        title: req.body.title,
        description: req.body.description,
        filePath: req.body.filePath,
        likes: req.body.like,
        dislikes: req.body.dislike,
        Comments: req.body.totalComment,
        Views: req.body.totalViews,
        mentionedTo: req.body.mentionedTo,
      });
      const savePost = uplaod.save();
      const filePath = req.body.filePath;
      const maindir = process.cwd();
      res.sendFile(`${maindir}/uploads/${filePath}`);
    }
  } catch (error) {
    res.status(400).json({
      message: "Unabale to Save",
    });
  }
};

module.exports = { UploadPosts };
