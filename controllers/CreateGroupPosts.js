const CreateGroupSchema = require("../models/CreateGroupSchema.js");

const CreateGroupPosts = async (req, res, next) => {
  try {
    // THIS IS POST CREATER ID
    const userId = req.payload.id;
    // THIS IS GROUP ID WHERE POST IS CREATING
    const groupId = req.params.groupId;
    const existUser = await CreateGroupSchema.find({ _id: groupId });
    const allMemmbers = [];
    // IT WILL GIVE ALL ADMINS FROM THIS GROUP
    const GroupAdmins = existUser[0].admin;
    // IT WILL GIVE ALL MEMMBERS FROM THIS GROUP
    const GroupMemmbers = existUser[0].memmbers;
    // CONDITION FOR ADMINS GET AND PUSH INTO ALL MEMMBERS
    if (GroupAdmins.length !== 0) {
      for (let admins = 0; admins < GroupAdmins.length; admins++) {
        allMemmbers.push(GroupAdmins[admins]);
      }
      next();
    }
    // CONDITION FOR MEMMBERS GET AND PUSH INTO ALL MEMMBERS
    if (GroupMemmbers.length !== 0) {
      for (let memmbers = 0; memmbers < GroupMemmbers.length; memmbers++) {
        allMemmbers.push(GroupMemmbers[memmbers]);
      }
      next();
    }
    for (let creater = 0; creater < allMemmbers.length; creater++) {
      if (userId === allMemmbers[creater]) {
        console.log("true");
        break;
      } else {
        console.log("false");
        break;
      }
    }
    res.status(200).json({ message: "Verify" });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Unabale to Save",
    });
  }
};

module.exports = { CreateGroupPosts };
