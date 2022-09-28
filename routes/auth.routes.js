const {
  register,
  login,
  googleAuth,
} = require("../controllers/auth.controller");

const express = require("express");
// import {} from "../controllers/auth.controller";

const router = express.Router();

// creating users
router.post("/register", register);

// login

router.post("/login", login);

//  google login

router.post("/google", googleAuth);

module.exports = router;
