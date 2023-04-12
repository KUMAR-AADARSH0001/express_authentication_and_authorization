const express = require("express");
const userRoutes = require("./routes/web");
const connectDB = require("./config/connectDB.js");
const app = express();
const port = process.env.PORT || 8000;

// CREATING VARIABLE FOR ATLAS CONNECTION
const DATABASE_URL =
  "mongodb+srv://kumaraadarsh:kumaraadarsh1@cluster0.4r7njdy.mongodb.net/?retryWrites=true&w=majority";

// CREATING JSON FORMATE TO ALL DATA FROM GIVING USER INPUT
app.use(express.json());

// CALLING DATABASE FUNCTION WITH ARGUMENT
connectDB(DATABASE_URL);

// MAIN ROUTE OF THIS PROJECT
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server listning at http://localhost:${port}`);
});
