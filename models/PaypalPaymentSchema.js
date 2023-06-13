const mongoose = require("mongoose");

const PaypalPaymentSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    sennderId: { type: String, required: true },
    recieverId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PaypalPaymentSchema", PaypalPaymentSchema);
