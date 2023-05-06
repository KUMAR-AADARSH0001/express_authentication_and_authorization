const {
  SentMessagesSchema,
  ReceiveMessagesSchema,
} = require("../models/MessageData.js");

// SENT MESSAGE CONTROLER
const SentMessages = async (req, res) => {
  //   sendBy = req.payload.id;
  //   sendTo = req.body.id;
  console.log("Sent func run");
  // CREATING NEW SENT CHAT DETAILS
  const Sent_Detail = new SentMessagesSchema({
    // sendBy: sendBy,
    // sendTo: sendTo,
    message: message,
  });
  console.log(Sent_Detail);
  //   console.log(Sent_Detail.sendBy);
  //   console.log(Sent_Detail.sendTo);
  //   await Sent_Detail.save();

  res.status(201).json({
    success: true,
    message: "Message Send Successfully...",
  });
  console.log("sssssssss end");
};

// RECIEVE MESSAGE CONTROLER
const RecieveMessages = async (req, res) => {
  //   receivedBy = req.payload.id;
  //   receivedFrom = req.body.id;
  console.log("Recieve func run");
  // CREATING NEW RECIEVE CHAT DETAILS
  const Receive_Detail = new ReceiveMessagesSchema({
    // receivedBy: receivedBy,
    // receivedFrom: receivedFrom,
    message: message,
  });
  console.log(Receive_Detail);
  //   console.log(Receive_Detail.receivedBy);
  //   console.log(Receive_Detail.receivedFrom);
  //   await Receive_Detail.save();
  res.status(201).json({
    success: true,
    message: "Message Recieved Successfully...",
  });
  console.log("rrrrrr end");
};

module.exports = { SentMessages, RecieveMessages };
