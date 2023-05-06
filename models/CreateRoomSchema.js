const mongoose = require("mongoose");

const CreateRoomSchema = new mongoose.Schema(
  {
    sendBy: { type: String, required: true },
    sendTo: { type: String, required: true },
    messages: [],
  },
  { timestamps: true }
);
const CreateGroupRoomSchema = mongoose.Schema(
  {
    groupname: { type: String, required: true },
    admin: [],
    memmbers: [],
    messages: [],
  },
  { timestamps: true }
);
module.exports = mongoose.model("MessagesRoom", CreateRoomSchema);
module.exports = mongoose.model("MessagesGroupRoom", CreateGroupRoomSchema);
