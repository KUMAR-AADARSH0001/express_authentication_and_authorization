const CreateSquareUPPayment = async (req, res) => {
  try {
    res.redirect("https://square.link/u/Tfh0UxYw");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = { CreateSquareUPPayment };
