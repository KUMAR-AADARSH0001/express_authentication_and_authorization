const userModel = require("../models/UserSchema.js");
const ReportSchema = require("../models/ReportSchema.js");

const ReportUser = async (req, res) => {
  const reportedBy = req.payload._id;

  const reportedTo = req.params.id;

  try {
    const existUser = await userModel.findOne({ _id: reportedTo });

    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const userreported = await ReportSchema.findOne({
        reportedBy: reportedBy,
        reportedTo: reportedTo,
      });
      if (!userreported) {
        const result = await ReportSchema.create({
          content: req.body.content,
          reportedBy: reportedBy,
          reportedTo: reportedTo,
        });

        result.save();
        return res
          .status(200)
          .json({ success: true, message: "User Reported Successfully..." });
      } else {
        return res.status(200).json({
          success: true,
          message: "You have Allready Reported this User",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Internal Server Error" });
  }
};

module.exports = { ReportUser };
