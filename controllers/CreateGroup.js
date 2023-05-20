const CreateGroupSchema = require("../models/CreateGroupSchema.js");

const CreateGroup = async (req, res) => {
  try {
    const Admin = req.payload.id;
    const GroupName = req.body.groupname;
    const existingGroup = await CreateGroupSchema.find({
      groupname: GroupName,
    });
    if (existingGroup.length === 0) {
      // CREATING NEW GROUP WITH TAKING VALUE FROM REQ.BODY
      const group_detail = new CreateGroupSchema({
        groupname: req.body.groupname,
        admin: Admin,
        memmbers: req.body.memmbers,
      });
      // APPENDING NEW GROUP DETAILS TO EXISTING GROUP DATABASE
      existingGroup.push(group_detail);
      await group_detail.save();
      res.status(200).json({ success: true, message: "Your Group Saved..." });
    } else {
      res.status(404).send(`${GroupName} Group Allready exists`);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { CreateGroup };
