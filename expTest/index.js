const app = require("express")(); // Import express
// const app = express(); // Create an Express application

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
