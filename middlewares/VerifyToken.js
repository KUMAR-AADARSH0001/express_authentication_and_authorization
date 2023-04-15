const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const verify_token = (req, res, next) => {
  try {
    // ACCESSING TOKEN FROM HEADER IN USER INPUT
    let token = req.headers["access_token"];
    if (token) {
      token = token.split(" ")[0];
      jwt.verify(token, SECRET_KEY, (err, payload) => {
        if (err) {
          return res.status(401).json({ success: false, message: err });
        }
        req.payload = payload;
      });
      next();
    } else {
      res.status(401).json({ message: "Invaid Token" });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorize User" });
  }
};

module.exports = { verify_token };
