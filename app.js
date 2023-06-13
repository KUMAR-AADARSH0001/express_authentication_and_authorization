const express = require("express");
const app = express();
const userRoutes = require("./routes/web");
require("dotenv").config();
const {connectDB} = require("./config/connectDB.js");
const { ChatWithSocketIO } = require("./middlewares/ChatWithSocketIO.js");

// FOR SOCKET SERVER
const http = require("http").createServer(app);
// GIVING PORT FROM DOTENV FILE
const port = process.env.PORT;
// DATABASE CONNECTION FROM DOTENV FILE
const DATABASE_URL = process.env.DATABASE_URL;

// CREATING JSON FORMATE TO ALL DATA FROM GIVING USER INPUT
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// CALLING DATABASE FUNCTION WITH ARGUMENT
connectDB(DATABASE_URL);

// MAIN ROUTE OF THIS PROJECT
app.use("/users", userRoutes);

// CREATING CHAT SERVER WITH SOCKET.IO9
ChatWithSocketIO(http);

// CREATING SERVER
http.listen(port, () => {
  console.log(`Server listning at http://localhost:${port}`);
});
