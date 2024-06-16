require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/register");
const authRoutes = require("./routes/login");
const usersinfoRoutes = require("./routes/usersinfo");
const deleteRoutes = require("./routes/delete");
const resetRoutes = require("./routes/reset");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/usersinfo", usersinfoRoutes)
app.use("/api/reset", resetRoutes)
app.use("/api/delete", deleteRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
