const Events = require("../models/events"); // import schema from models
const fs = require("fs");


//create functions here


//function to create event
const createEvent = async (req, res) => {
    try {
      const newEvent = new Events({
        week: req.body.week,
        day: req.body.day,
        workout: req.body.workout,
        woDetails: req.body.woDetails,
        feeling: req.body.feeling,
        food: req.body.food,
        // bodyimage: {
        //   data: fs.readFileSync("uploads/" + req.file.filename),
        //   contentType: "image/jpg",
        // },
        points: req.body.points,
        
        
      });
  
      const savedEvent = await newEvent.save();
      // console.log("image saved");
      res.json({
        message: "Event created successfully",
        createdEvent: savedEvent,
      });
    } catch (error) {
      console.log("PUT /events/create", error);
      res.status(400).json({ status: "error", message: error.message });
    }
  };
//function for reading all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.json({ events });
  } catch (error) {
    res.json(error);
  }
};
//function for updating event
const updateEvent = async (req, res) => {
  try {
    const event = await Events.findById(req.body.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    } else {
      event.week = req.body.week;
      event.day = req.body.day;
      event.workout = req.body.workout;
      event.woDetails = req.body.woDetails;
      event.feeling = req.body.feeling;
      event.food = req.body.food;
      // FIXME: NEED TO DOUBLE CHECK THIS FROM FRONT END. POSTMAN WORKS
      // event.img = {
      //   data: fs.readFileSync("uploads/" + req.file.filename),
      //   contentType: "image/jpg",
      // };
      
      event.points = req.body.points;
    }
    const updatedEvent = await event.save();
    res.json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    console.log(error.message);
  }
};
//function for deleting event
const deleteEvent = async (req, res) => {
  try {
    const event = await Events.findById(req.body.id);
    if (!event) {
      return res.json({ status: "not found", message: "Event not found" });
    }

    await event.remove();
    res.json({ status: "ok", message: "Event deleted successfully" });
  } catch (error) {
    res.json(error);
  }
};
//function to read first and last image 


// To export the functions to router
module.exports = {
    createEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
};
