const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    week: {type: String, required: true},
    day: { type: String, required: true },
    workout: { type: String },
    woDetails: { type: String },
    feeling: { type: String, required: true },
    food: { type: String },
    bodyimage: {
      data: Buffer,
      contentType: String,
    },
    points: { type: Number },
  },
  { collection: "event", timestamps: true }
);

const Events = mongoose.model("Events", EventsSchema);

module.exports = Events;
