const nodemailer = require("nodemailer");

const SendMail = async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();
    // CONNECT WITH SMTP SERVER
    let transporter = await nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "joshua.walsh@ethereal.email",
        pass: "WRCGNPxnw2y1yHdeX1",
      },
    });
    // CREATING LOGIC OF MAIL
    let info = await transporter.sendMail({
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    });
    res.status(200).send({
      success: true,
      message: "Mail Sent Successfully...",
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Iternal Server Error`,
    });
  }
};

module.exports = { SendMail };
