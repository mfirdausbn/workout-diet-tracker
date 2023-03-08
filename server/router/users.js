// import express
const express = require("express");
// import router
const router = express.Router();
// import middleware if any
const auth = require("../middleware/auth")
const authAdmin = require("../middleware/authAdmin");
// import functions from controller
const {
  createUser,
  login,
  getUsers,
  updateUser,
  deleteUser,
  getCurrentUserInfo,
} = require("../controllers/users");

// create routes
router.put("/create", createUser);
router.post("/login", login);
router.get("/allusers", getUsers);
router.patch("/update", updateUser);
router.delete("/delete",authAdmin, deleteUser);
router.post("/currentUser", getCurrentUserInfo)

// export routes for server.js to access
module.exports = router;
