const otpGenerator = require("otp-generator");
const twilio = require("twilio");

const OTPVerification = (req, res) => {
  try {
    const { phoneNumber } = req.body;
    otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(otp);
    // Send OTP via SMS using Twilio API
    const accountSid = "ACfb7a37a1d7c353fe238d29311afeacfd";
    const authToken = "5ee6f359f7bd319d28f83264b8feee3a";
    const client = twilio(accountSid, authToken);
    client.messages
      .create({
        body: `Your OTP is: ${otp}`,
        from: 7206290255,
        to: phoneNumber,
      })
      .then((message) => {
        console.log(`OTP sent to ${phoneNumber}: ${otp}`);
        res.json({ success: true, message: "OTP sent successfully" });
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        res.status(500).json({ success: false, message: "Failed to send OTP" });
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { OTPVerification };
