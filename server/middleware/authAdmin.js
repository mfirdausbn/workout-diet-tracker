require("dotenv").config();

const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next) => {
  console.log(req.headers);

  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.ACCESS_SECRET);
      console.log(payload);
      //////////////////////////////////////////////////////////////////////////////
      if (payload.role !== "admin") {
        return res.status(403).json({ message: "Need admin role" });
      }
      /////////////////////////////////////////////////////////////////////////////

      req.decoded = payload;

      console.log(payload);
      next();
    } catch (error) {
      return res.status(401).send({
        status: "error",
        message: "unauthorized",
      });
    }
  } else {
    return res.status(403).json({
      status: "error",
      message: "missing token",
    });
  }
};

module.exports = authAdmin;
