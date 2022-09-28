const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const videoRoutes = require("./routes/videos.routes");
const commentsRoutes = require("./routes/comments.routes");
const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connection to db established");
    })
    .catch((err) => {
      throw err;
    });
};

// middleware

app.use(cookieParser());
app.use(express.json());
app.use((err, req, res, next) => {
  const status = err.status || 500;

  const message = err.message || "something went wrong";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
// custom routes and middleware

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentsRoutes);

app.listen(8800, () => {
  connect();
  console.log("connection to server established");
});
