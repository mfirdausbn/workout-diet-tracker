const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
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
  { collection: "event" }
);

const Events = mongoose.model("Events", EventsSchema);

module.exports = Events;
