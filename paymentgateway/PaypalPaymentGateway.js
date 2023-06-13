const CreatePaypalPayment = (req, res) => {
  try {
    res.redirect("https://www.paypal.com/paypalme/aadarshkumar0001");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = { CreatePaypalPayment };
