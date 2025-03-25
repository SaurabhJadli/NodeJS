require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define Mongoose Schema
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model("FormData", FormDataSchema);

// Handle Form Submission (POST Request)
app.post("/submit", async (req, res) => {
  try {
    const newEntry = new FormData(req.body);
    await newEntry.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
