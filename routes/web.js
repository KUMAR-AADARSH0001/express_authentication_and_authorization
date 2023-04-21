const express = require("express");
const userRoutes = express.Router();
const { SignUP } = require("../controllers/SignUP.js");
const { SignIN } = require("../controllers/SignIN.js");
const { ChangePassword } = require("../controllers/ChangePassword.js");
const { ResetPassword } = require("../controllers/ResetPassword.js");
const { verify_token } = require("../middlewares/VerifyToken.js");
const { FileUploader } = require("../middlewares/FileUploader.js");
const { FindFile } = require("../controllers/FindFile.js");
const { UploadPosts } = require("../controllers/UploadPosts.js");
const { LikePosts } = require("../controllers/LikePosts.js");
const { DisLikePosts } = require("../controllers/DisLikePosts.js");
const { CommentPosts } = require("../controllers/CommentPosts.js");

// ALL ROUTES OF APPLICATION
userRoutes.post("/signup", SignUP);
userRoutes.post("/signin", SignIN);
userRoutes.post("/changepassword", verify_token, ChangePassword);
userRoutes.post("/forgotpassword", ResetPassword);
userRoutes.post("/uploadfile", FileUploader, FindFile);
userRoutes.post("/uploadposts", verify_token, UploadPosts);
userRoutes.post("/likes/:postId/likes", verify_token, LikePosts);
userRoutes.post("/dislikes/:postId/dislikes", verify_token, DisLikePosts);
userRoutes.post("/comments/:postId/comments", verify_token, CommentPosts);

module.exports = userRoutes;
