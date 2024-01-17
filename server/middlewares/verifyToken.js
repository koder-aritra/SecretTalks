const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "test", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token verification failed" });
    }

    req.user = decoded;
    next();
  });
};
