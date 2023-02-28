const Events = require("../models/events"); // import schema from models

//create functions here


//function to create event
const createEvent = async (req, res) => {
    try {
      const newEvent = new Events({
        date: req.body.date,
        workout: req.body.workout,
        woDetails: req.body.woDetails,
        feeling: req.body.feeling,
        food: req.body.food,
        bodyimage: {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/jpg",
        },
        points: req.body.points
      });
  
      const savedEvent = await newEvent.save();
      console.log("image saved");
      res.json({
        message: "Event created successfully",
        createdEvent: savedEvent,
      });
    } catch (error) {
      console.log("PUT /events/create", error);
      res.status(400).json({ status: "error", message: error.message });
    }
  };
//function for reading event by week

//function for updating event

//function for deleting event

//function to read first and last image 


// To export the functions to router
module.exports = {
    createEvent
};
