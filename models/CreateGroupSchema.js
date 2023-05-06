const mongoose = require("mongoose");

const CreateGroupSchema = mongoose.Schema(
  {
    groupname: { type: String, required: true },
    admin: [],
    memmbers: [],
    groupposts: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("CreateGroup", CreateGroupSchema);
