function sendVerificationEmail(manager) {
  // Use your preferred email sending library or service here
  // This is just a basic example using nodemailer
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-password",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "admin-email@gmail.com",
    subject: "New Manager Signup",
    text: `A new manager has signed up for the project.\nName: ${manager.name}\nEmail: ${manager.email}\n\nPlease verify their account.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
