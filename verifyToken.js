const jwt = require("jsonwebtoken");
const { createError } = require("./error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(createError(401, "You auth not!"));

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return next(createError(403, "Foul token!"));

    req.user = user;
    next();
  });
};

module.exports = { verifyToken };
