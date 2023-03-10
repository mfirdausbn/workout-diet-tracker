// Require the dependencies
const mongoose = require("mongoose");

// This code defines a Mongoose schema (how the data should look like) for a "User" document in a MongoDB database.
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hash: { type: String, required: true },
    role:{type: String},

    height: { type: String },
    startWeight: { type: String },
    startBodyFat: { type: String },
    startMuscleMass: { type: String },
    endWeight: { type: String },
    endBodyFat: { type: String },
    endMuscleMass: { type: String },

  },
  { collection: "users", timestamps: true }
);

// ** add height and weight , BF and MM here? or shift it to another schema?

// The mongoose.model() function creates a model called "User", using the "userSchema" definition, and maps it to a collection in the MongoDB database with the same name as the model (in this case "User").
const User = mongoose.model("User", userSchema);

module.exports = User;
