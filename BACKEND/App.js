const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const Router = require("./Router/Route");

const app = express();

const DB_PATH =
  "mongodb+srv://ved:ved@airbnb.hp2nr.mongodb.net/VEDTIWARI?retryWrites=true&w=majority&appName=airbnb";

app.use(cors());
app.use(express.json());
app.use("/", (req, res) => res.send({ activeStatus: true, error: false }));
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
