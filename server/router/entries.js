// import express
const express = require("express");
// import router
const router = express.Router();
// import middleware if any
const auth = require("../middleware/auth")
// import functions from controller
const {
  createEntry,
  getAllEntries,
  updateEntry,
  deleteEntry,
  getEntriesByWeek,
  getEntryByDayAndWeek,
} = require("../controllers/entries");

////////////////////////////
// Handling Image Events
const multer = require("multer");

const storage = multer.diskStorage({
  // declare the destination for the file in server side
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  // file name saved as the original file name when uploaded
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
////////////////////////////////////////////////////////////////////////

// Create entry
router.put("/create",
 upload.single("entryImg"), 
 createEntry);

// READ show all entries
router.get("/showall", getAllEntries);

//READ specific entry by day and week
router.post("/showbydayandweek", getEntryByDayAndWeek);

//READ show entries by week
router.post("/showbyweek",auth, getEntriesByWeek);

// UPDATE entry by ID
router.patch("/update", upload.single("entryImg"), updateEntry);

// DELETE entry by ID
router.delete("/delete", deleteEntry);

// export routes for server.js to access
module.exports = router;
