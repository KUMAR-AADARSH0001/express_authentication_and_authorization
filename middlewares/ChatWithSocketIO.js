const { Server } = require("socket.io");
const CreateRoomSchema = require("../models/CreateRoomSchema.js");

// CREATING CHAT SERVER WITH SOCKET.IO
const ChatWithSocketIO = async (data) => {
  try {
    const io = new Server(data);
    io.on("connection", async (socket) => {
      console.log("User connected");
      const { id } = socket.handshake.query;
      const existingRoom = await CreateRoomSchema.find({ _id: id });
      console.log(existingRoom);
      const Add_Msg = existingRoom[0].messages;
      console.log(Add_Msg);
      // SENDING MESSAGE
      socket.on("Send", async (data) => {
        console.log("Message Send:", data);
        // APPENDING NEW MESSAGE IN EXISTING MSG ARRAY
        Add_Msg.push({ msg: data, time: Date() });
        console.log("message saved");
        // console.log(existingRoom);
        console.log(existingRoom[0].messages);
        io.emit("Receive", data);
        console.log(existingRoom, "existingRoom");
        await existingRoom[0].save();
        // SEND MESSAGE TO ALL CONNECTING CLIENT
      });
      // USER DISCONNECT WHEN CLOSED
      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ChatWithSocketIO };
