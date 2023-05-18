const CreateGroupSchema = require("../models/CreateGroupSchema.js");
const PostSchema = require("../models/PostSchema.js");
const RoomMessageSchema = require("../models/RoomSchema.js");
const userModel = require("../models/UserSchema.js");

// GETTING ALL USERS
const GetAllUsers = async (req, res) => {
  try {
    existUsers = await userModel.find();
    res
      .status(500)
      .json({ success: true, message: "All Users List :-", user: existUsers });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GETTING ALL POSTS FROM USERS
const GetAllPosts = async (req, res) => {
  try {
    existPosts = await PostSchema.find();
    res
      .status(500)
      .json({ success: true, message: "All Posts List :-", user: existPosts });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GETTING ALL ROOMS CREATED BY USERS
const GetAllRooms = async (req, res) => {
  try {
    existRooms = await RoomMessageSchema.find();
    res
      .status(500)
      .json({ success: true, message: "All Rooms List :-", user: existRooms });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GETTING ALL GROUPS CREATED BY USERS
const GetAllGroups = async (req, res) => {
  try {
    existGroups = await CreateGroupSchema.find();
    res.status(500).json({
      success: true,
      message: "All Groups List :-",
      user: existGroups,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { GetAllUsers, GetAllPosts, GetAllRooms, GetAllGroups };
