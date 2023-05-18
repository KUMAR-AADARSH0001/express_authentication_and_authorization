const SendNotification = (req, res, UserNotify) => {
  const message = {
    notification: [UserNotify],
  };
  res
    .send(message)
    .then((response) => {
      console.log("Notification sent successfully:", response);
      res.status(200).send("Notification sent successfully");
    })
    .catch((error) => {
      console.error("Error sending notification:", error);
      res.status(500).send("Failed to send notification");
    });
};

module.exports = { SendNotification };
