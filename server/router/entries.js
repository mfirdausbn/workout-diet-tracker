// import express
const express = require("express");
// import router
const router = express.Router();
// import middleware if any

// import functions from controller
const {
  createEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
  getEntriesByWeek,
  getEntryByDayAndWeek,
} = require("../controllers/entries");

// Create entry
router.put("/create", createEntry);

// READ show all entries
router.get("/showall", getAllEntries);

//READ specific entry by day and week
router.post("/showbydayandweek", getEntryByDayAndWeek);

//READ show entries by week
router.get("/showbyweek", getEntriesByWeek);

// UPDATE entry by ID
router.patch(
  "/update",
  //  upload.single("entryImg"),
  updateEntry
);

// DELETE entry by ID
router.delete("/delete", deleteEntry);

// export routes for server.js to access
module.exports = router;
