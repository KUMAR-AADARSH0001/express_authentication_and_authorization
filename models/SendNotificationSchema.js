const mongoose = require("mongoose");

const SendNotificationSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    message: { type: String, required: true },
    recieverId: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("SendNotification", SendNotificationSchema);
