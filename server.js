const express = require("express");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API..."));

// define route
app.use("/api/tasks", require("./routes/api/tasks"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
