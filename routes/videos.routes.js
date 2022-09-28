const express = require("express");
const { verifyToken } = require("../verifyToken");

const {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  sub,
  trend,
  random,
  search,
  addView,
  getByTag,
} = require("../controllers/video.controller");

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, addVideo);
router.delete("/:id", verifyToken, addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/tags", getByTag);
router.get("/search", search);

module.exports = router;
