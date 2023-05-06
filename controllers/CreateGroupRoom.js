const CreateGroupRoomSchema = require("../models/CreateRoomSchema.js");

//  MESSAGE CONTROLER
const GroupMessagesRoom = async (req, res) => {
  try {
    const Admin = req.payload.id;
    const GroupName = req.body.groupname;
    const existingGroupRoom = await CreateGroupRoomSchema.find({
      groupname: GroupName,
    });
    if (existingGroupRoom.length === 0) {
      // CREATING NEW GROUP WITH TAKING VALUE FROM REQ.BODY
      const group_detail = new CreateGroupRoomSchema({
        groupname: GroupName,
        admin: Admin,
        memmbers: req.body.memmbers,
      });
      // APPENDING NEW GROUP DETAILS TO EXISTING GROUP DATABASE
      existingGroupRoom.push(group_detail);
      await group_detail.save();
      res.status(200).json({
        success: true,
        message: "Your Group Room Saved...",
        RoomId: group_detail._id,
      });
    } else {
      res.status(404).send({
        success: true,
        message: `${GroupName} Group Room Allready exists`,
        RoomId: existingGroupRoom[0].id,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { GroupMessagesRoom };
