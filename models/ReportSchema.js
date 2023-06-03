const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    reportedBy: { type: String, required: true, unique: false },
    reportedTo: { type: String, required: true, unique: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserReportSchema", ReportSchema);
