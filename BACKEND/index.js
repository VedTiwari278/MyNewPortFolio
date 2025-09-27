const mongoose = require("mongoose");
const express = require("express");
const Router = require("./Router/Route");
const cors = require("cors");

const app = express();
const DB_PATH =
  "mongodb+srv://ved:ved@airbnb.hp2nr.mongodb.net/VEDTIWARI?retryWrites=true&w=majority&appName=airbnb";

// CORS allow for both production and local development
app.use(cors());

app.use(express.json());
app.use(Router);

mongoose
  .connect(DB_PATH)
  .then(() => {
    app.listen(8000, () => {
      console.log("🚀 The App is listening at PORT 8000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
