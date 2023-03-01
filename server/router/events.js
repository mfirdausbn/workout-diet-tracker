// import express
const express = require("express");
// import router
const router = express.Router();
// import middleware if any

// import functions from controller
const {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
  getEventsByWeek,
  getEventByDayAndWeek,
} = require("../controllers/events");

// Create event
router.put("/create", createEvent);

// READ show all events
router.get("/showall", getAllEvents);

//READ specific event by day and week
router.post("/showbydayandweek", getEventByDayAndWeek);

//READ show events by week
router.get("/showbyweek", getEventsByWeek);

// UPDATE event by ID
router.patch(
  "/update",
  //  upload.single("eventImg"),
  updateEvent
);

// DELETE event by ID
router.delete("/delete", deleteEvent);

// export routes for server.js to access
module.exports = router;
