const mongoose = require("mongoose");

const EntriesSchema = new mongoose.Schema(
  {
    week: { type: String },
    day: { type: String },
    workout: { type: String },
    woDetails: { type: String},
    feeling: { type: String, required: true },
    food: { type: String },
    entryImg: {
      data: Buffer,
      contentType: String,
    },
    points: { type: Number },
  },
  { collection: "entry", timestamps: true }
);

const Entries = mongoose.model("Entries", EntriesSchema);

module.exports = Entries;
