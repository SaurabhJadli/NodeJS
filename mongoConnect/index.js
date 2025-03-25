const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // Middleware to parse JSON

// 🔹 Connect to MongoDB
mongoose
  .connect("mongodb+srv://unipas8:VcdhgQXx1tvVZGhK@cluster0.apeqn.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, MongoDB is connected!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// ------------------------------------------------------------------------------------------------
// Create API Routes to Interact with MongoDB

//const User = require("./models/User");
//
// 🔹 Create a new user
//app.post("/users", async (req, res) => {
//  try {
//    const newUser = new User(req.body);
//    await newUser.save();
//    res.status(201).json(newUser);
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
//});
//
// 🔹 Fetch all users
//app.get("/users", async (req, res) => {
//  const users = await User.find();
//  res.json(users);
//});
//
// 🔹 Fetch a single user by ID
//app.get("/users/:id", async (req, res) => {
//  const user = await User.findById(req.params.id);
//  res.json(user);
//});
//
// 🔹 Update a user
//app.put("/users/:id", async (req, res) => {
//  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//  res.json(updatedUser);
//});
//
// 🔹 Delete a user
//app.delete("/users/:id", async (req, res) => {
//  await User.findByIdAndDelete(req.params.id);
//  res.json({ message: "User deleted" });
//});
//
