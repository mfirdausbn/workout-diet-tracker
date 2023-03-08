// import schema from models
const Users = require("../models/users");
// import necessary encryption
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

// 1. Function for creating accounts
const createUser = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({
        status: "error",
        message: "user already exists",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const createUser = await Users.create({
      username: req.body.username,
      hash,
      role: req.body.role,
      height: req.body.height,
      startWeight: req.body.startWeight,
      startBodyFat: req.body.startBodyFat,
      startMuscleMass: req.body.startMuscleMass,
    });

    console.log("Created User: " + createUser);
    res.json({ status: "success", message: "user created successfully" });
  } catch (err) {
    console.log("PUT /admin/create", err);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
};

// 2. Function for login
const login = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "username/password issue" });
    }
    // Encrypt the password coming with the same encryption factors as the one in CREATE then compare
    const result = await bcrypt.compare(req.body.password, user.hash);
    if (!result) {
      return res
        .status(401)
        .json({ status: "error", message: "username/password issue" });
    }

    const payload = {
      id: user._id,
      username: user.username,
      role: user.role,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "30m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30D",
      jwtid: uuidv4(),
    });

    const response = { access, refresh };
    res.json(response);
  } catch (err) {
    console.log("POST /admin/login", err);
    res
      .status(400)
      .json({ status: "error", message: "username/password issue" });
  }
};

// 3. Function to display all users
const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();

    // check if there are any users in the first place

    res.json(allUsers);
  } catch (err) {
    console.log("GET /admin/allusers", err);
    res.json({ status: "error", message: "unable to get list of users" });
  }
};

// 4. Function to update user info
const updateUser = async (req, res) => {
  try {
    const user = await Users.findOne({username: req.body.username});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.height = req.body.height;
      user.startWeight = req.body.startWeight;
      user.startBodyFat = req.body.startBodyFat;
      user.startMuscleMass = req.body.startMuscleMass;
      user.endWeight = req.body.endWeight;
      user.endBodyFat = req.body.endBodyFat;
      user.endMuscleMass = req.body.endMuscleMass;
    }
    const updatedUser = await user.save();
    res.json({ message: "User updated successfully", event: updatedUser });
  } catch (error) {
    console.log(error.message);
  }
};

//function to delete user
const deleteUser = async (req, res) => {
  try {
    const user = await Users.find(req.body.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      await user.remove();
      res.json({ message: "User deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createUser, login, getUsers, updateUser, deleteUser };
