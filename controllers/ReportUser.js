const userModel = require("../models/UserSchema.js");

const ReportUser = async (req, res) => {
  const reporterId = req.payload._id;
  console.log(reporterId);
  const reportedTo = req.params.id;
  console.log(reportedTo);
  try {
    const existUser = await userModel.findById({ _id: reportedTo });
    const reportlist = existUser.reportedby;
    if (!existUser) {
      return res.status(400).json({ message: "User Not Exists" });
    } else {
      const user = reportlist.includes(reporterId);
      if (user !== true) {
        existUser.reportedby.push(reporterId);
        existUser.save();
        return res.status(200).json({ message: "User reported..." });
      } else {
        return res
          .status(200)
          .json({ message: `${reportedTo} Also reported...` });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "Internal Server Error" });
  }
};

module.exports = { ReportUser };
