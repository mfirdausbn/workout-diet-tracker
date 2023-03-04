const Entries = require("../models/entries"); // import schema from models
const fs = require("fs");

//functions here

//function to create event

const createEntry = async (req, res) => {
  try {
    const newEntry = new Entries({
      week: req.body.week,
      day: req.body.day,
      workout: req.body.workout,
      woDetails: req.body.woDetails,
      feeling: req.body.feeling,
      food: req.body.food,
      entryImg: {
        data: fs.readFileSync("uploads/" + req.file.filename),
        contentType: "image/png",
      },
    });

    const savedEntry = await newEntry.save();
    console.log("image saved");
    res.json({
      message: "Entry created successfully",
      createdEntry: savedEntry,
    });
  } catch (error) {
    console.log("PUT /entry/create", error);
    res.status(400).json({ status: "error", message: error.message });
  }
};

//function for reading all events
const getAllEntries = async (req, res) => {
  try {
    const entry = await Entries.find();
    res.json({ entry });
  } catch (error) {
    res.json(error);
  }
};

//function for reading events by day and week
const getEntryByDayAndWeek = async (req, res) => {
  try {
    const entry = await Entries.find({
      week: req.body.week,
      day: req.body.day,
    });
    res.json({ entry });
  } catch (error) {
    res.json(error);
  }
};

//function for reading events by week
const getEntriesByWeek = async (req, res) => {
  try {
    const week = req.body.week;
    const entries = await Entries.find({ week });
    res.json({ entries });
  } catch (error) {
    res.json(error);
  }
};

//function for updating event
const updateEntry = async (req, res) => {
  try {
    const entry = await Entries.findById(req.body.id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    } else {
      entry.week = req.body.week;
      entry.day = req.body.day;
      entry.workout = req.body.workout;
      entry.woDetails = req.body.woDetails;
      entry.feeling = req.body.feeling;
      entry.food = req.body.food;
      // FIXME: NEED TO DOUBLE CHECK THIS FROM FRONT END. POSTMAN WORKS
      // event.img = {
      //   data: fs.readFileSync("uploads/" + req.file.filename),
      //   contentType: "image/jpg",
      // };

      entry.points = req.body.points;
    }
    const updatedEntry = await entry.save();
    res.json({ message: "Event updated successfully", entry: updatedEntry });
  } catch (error) {
    console.log(error.message);
  }
};

//function for deleting event
const deleteEntry = async (req, res) => {
  try {
    const entry = await Entries.findById(req.body.id);
    if (!entry) {
      return res.json({ status: "not found", message: "entry not found" });
    }

    await entry.remove();
    res.json({ status: "ok", message: "entry deleted successfully" });
  } catch (error) {
    res.json(error);
  }
};
//function to read first and last image

// To export the functions to router
module.exports = {
  createEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
  getEntriesByWeek,
  getEntryByDayAndWeek,
};
