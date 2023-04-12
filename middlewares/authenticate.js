const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const auth = (req, res, next) => {
  try {
    // ACCESSING TOKEN FROM HEADER IN USER INPUT
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userId = user.id;
    } else {
      res.status(401).json({ message: "Invaid Token" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorize User" });
  }
};

module.exports = { auth };
