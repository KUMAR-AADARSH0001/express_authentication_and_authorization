const { Server } = require("socket.io");
const RoomSchema = require("../models/RoomSchema.js");
const SECRET_KEY = "NOTESAPI";

// CREATING CHAT SERVER WITH SOCKET.IO
const ChatWithSocketIO = async (data) => {
  try {
    // await verify_token();
    const io = new Server(data);
    io.on("connection", async (socket) => {
      console.log("User connected");
      const { RoomId } = socket.handshake.query;
      const token = socket.request.headers.access_token;
      try {
        const decoded = jwt.verify(token, SECRET_KEY);
        SenderId = decoded.id;
        console.log(SenderId);
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
      // FINDING ROOM IN DATABASE
      const existingRoom = await RoomSchema.find({ _id: RoomId });
      // FETCING MSG ARRAY
      const Add_Msg = existingRoom[0].messages;
      // SENDING MESSAGE
      socket.on("Send", async (data) => {
        // APPENDING NEW MESSAGE IN EXISTING MSG ARRAY
        Add_Msg.push({ id: SenderId, msg: data, time: Date() });
        io.emit("Receive", data);
        await existingRoom[0].save();
        console.log(existingRoom);
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
