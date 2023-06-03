const express = require("express");
const userRoutes = express.Router();
const { SignUP } = require("../controllers/signUP.js");
const { SignIN } = require("../controllers/SignIN.js");
const { ChangePassword } = require("../controllers/ChangePassword.js");
const { ResetPassword } = require("../controllers/ResetPassword.js");
const { verify_token } = require("../middlewares/VerifyToken.js");
const { FileUploader } = require("../middlewares/FileUploader.js");
const { FindFile } = require("../controllers/FindFile.js");
const { UploadPosts } = require("../middlewares/UploadPosts.js");
const { LikePosts } = require("../controllers/LikePosts.js");
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
const { SendNotification } = require("../controllers/SendNotifications.js");
const { SendMail } = require("../middlewares/SendMail.js");
const { GetAllManagers } = require("../controllers/FindAllManagers.js");
const { UpdateUser } = require("../controllers/UpdateUser.js");
const { SendFriendRequest } = require("../controllers/SendFriendRequest.js");
const {
  AcceptFriendRequest,
} = require("../controllers/AcceptFriendRequest.js");
const { BlockUser } = require("../controllers/BlockUser.js");
const { ReportUser } = require("../controllers/ReportUser.js");

// ALL ROUTES OF APPLICATION
userRoutes.post("/signup", SignUP);
userRoutes.post("/signin", SignIN);
userRoutes.post("/changepassword", verify_token, ChangePassword);
userRoutes.post("/forgotpassword", ResetPassword);
userRoutes.post("/uploadfile", FileUploader, FindFile);
userRoutes.post("/uploadposts", verify_token, UploadPosts);
userRoutes.post("/likes/:postId/likes", verify_token, LikePosts);
userRoutes.post("/comments/:postId/comments", verify_token, CommentPosts);
userRoutes.post("/creategroup", verify_token, CreateGroup);
userRoutes.post("/creategroupposts/:groupId", verify_token, CreateGroupPosts);
userRoutes.post("/createroom/:id", verify_token, MessagesRoom);
userRoutes.post("/creategrouproom", verify_token, GroupMessagesRoom);
userRoutes.get("/all-users", GetAllUsers);
userRoutes.get("/all-posts", GetAllPosts);
userRoutes.get("/all-rooms", GetAllRooms);
userRoutes.get("/all-groups", GetAllGroups);
userRoutes.post("/send-mail", SendMail);
userRoutes.all("/send-notification", verify_token, SendNotification);
userRoutes.get("/all-managers", GetAllManagers);
userRoutes.put("/update-user/:id", UpdateUser);
userRoutes.post("/send-friend-request/:id", verify_token, SendFriendRequest);
userRoutes.post("/accept-friend-request", verify_token, AcceptFriendRequest);
userRoutes.post("/block-user/:id", verify_token, BlockUser);
userRoutes.post("/report-user/:id", verify_token, ReportUser);

module.exports = userRoutes;
