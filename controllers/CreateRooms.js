const CreateRoomSchema = require("../models/CreateRoomSchema.js");

//  MESSAGE CONTROLER
const MessagesRoom = async (req, res) => {
  try {
    sendBy = req.payload.id;
    sendTo = req.params.id;
    const existingRoom = await CreateRoomSchema.findOne({
      sendBy: sendBy,
      sendTo: sendTo,
    });
    if (existingRoom) {
      res.status(200).json({
        success: true,
        message: "Room Allready Exist",
        Room_Id: existingRoom.id,
      });
    } else {
      // CREATING NEW ROOM DETAILS
      const Room_Detail = await CreateRoomSchema({
        sendBy: sendBy,
        sendTo: sendTo,
      });
      await Room_Detail.save();
      res.status(201).json({
        success: true,
        message: "Room Create Successfully...",
        RoomId: Room_Detail._id,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { MessagesRoom };
