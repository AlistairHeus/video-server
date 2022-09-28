const express = require("express");

const {
  updateUser,
  deleteUser,
  getUser,
  unsubscribe,
  subscribe,
  like,
  dislike,
} = require("../controllers/user.controller");
const { verifyToken } = require("../verifyToken");

const router = express.Router();

// update user

router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get a user

router.get("/find/:id", getUser);

// subscribe to a user

router.put("/sub/:id", verifyToken, subscribe);

// unsubscribe to a user

router.put("/unsub/:id", verifyToken, unsubscribe);

// like a video

router.put("/like/:videoId", verifyToken, like);

// dislike a video

router.put("/dislike/:videoId", verifyToken, dislike);

module.exports = router;
