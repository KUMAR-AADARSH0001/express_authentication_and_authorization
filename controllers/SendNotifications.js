const SendNotificationSchema = require("../models/SendNotificationSchema.js");

const SendNotification = async (req, res) => {
  try {
    const User = req.payload.id;
    const SN_Details = await new SendNotificationSchema({
      senderId: User,
      message: req.body.message,
      recieverId: req.body.recieverId,
    });
    console.log(SN_Details);
    // await SN_Details.save();
    res.status(200).json({
      success: true,
      message: SN_Details.message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { SendNotification };
