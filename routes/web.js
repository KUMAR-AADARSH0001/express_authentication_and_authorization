const express = require("express");
const userRoutes = express.Router();
const { SignUP } = require("../controllers/SignUP.js");
const { SignIN } = require("../controllers/SignIN.js");
const { ChangePassword } = require("../controllers/ChangePassword.js");
const { ResetPassword } = require("../controllers/ResetPassword.js");
const { verify_token } = require("../middlewares/VerifyToken.js");
const { FileUploader } = require("../middlewares/FileUploader.js");
const { FindFile } = require("../controllers/FindFile.js");
const { UploadPosts } = require("../middlewares/UploadPosts.js");
const { LikePosts } = require("../controllers/LikePosts.js");
const { DisLikePosts } = require("../controllers/DisLikePosts.js");
const { CommentPosts } = require("../controllers/CommentPosts.js");
const { CreateGroup } = require("../controllers/CreateGroup.js");
const { CreateGroupPosts } = require("../controllers/CreateGroupPosts.js");
const { MessagesRoom } = require("../controllers/CreateRooms.js");
const { GroupMessagesRoom } = require("../controllers/CreateGroupRoom.js");
const {
  GetAllUsers,
  GetAllPosts,
  GetAllRooms,
  GetAllGroups,
} = require("../controllers/AllGetMethods.js");

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
userRoutes.post("/creategroup", verify_token, CreateGroup);
userRoutes.post("/creategroupposts/:groupId", verify_token, CreateGroupPosts);
userRoutes.post("/createroom/:id", verify_token, MessagesRoom);
userRoutes.post("/group/chat", verify_token, GroupMessagesRoom);
userRoutes.get("/allusers", GetAllUsers);
userRoutes.get("/allposts", GetAllPosts);
userRoutes.get("/allrooms", GetAllRooms);
userRoutes.get("/allgroups", GetAllGroups);

module.exports = userRoutes;
