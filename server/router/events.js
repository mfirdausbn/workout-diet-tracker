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
  deleteEvent
} = require("../controllers/events");

// Create event
router.put("/create", createEvent);

// READ show all events
router.get("/showall", getAllEvents);

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
