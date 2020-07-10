const express = require("express")
const router = express.Router()


const Event = require("../models/events.model")
//const User = require("../models/user.model")
const Location = require("../models/locations.model")
//const { deserialize } = require("v8")



//Maps

router.get("/api", (req, res, next) => {
  Event.find()
    .then((allEventsFromDB) => res.json(allEventsFromDB))
    .catch((err) => next(err));
})

//List allEvents
router.get("/events-list", (req, res, next) => {
  Event.find()
    .populate("owner")
    .populate("participants")
    .then((allEvents) => {
           res.render("events/events-list", { allEvents });
    })
    .catch((err) => next(err));
})
///Pruebaaaaa
router.get("/locations", (req, res) => {
  Location.find()
    .then((allLocations) => res.json(allLocations))
    .catch((err) => next(err));
})

//encontrar todos los usuarios////Quitar el promiseAll
router.get("/new-event", (req, res) => {
  Location.find()
    .then((allData) =>{
    console.log(allData)
      res.render("events/new-events", { location: allData})}
    )
    .catch((err) => next(err));
});

//Crear evento
router.post("/new-event", (req, res, next) => {
  const { title, theme, locationName, eventDate } = req.body;
//   console.log(req.body);

  Location.find({ title: locationName })
    .then((response) => {
      const location = [response[0].coords.lat, response[0].coords.lng];
      Event.create({ title, theme,locationName, coordinates: location, eventDate, owner: req.user.id})
    })
    .then(() => res.redirect("/events/events-list"))
    .catch((err) => next(err))
})

router.get("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .populate("owner")
    .populate("participants")
    .then((theEvent) => res.render("events/event-details", theEvent))
    .catch((err) => next(err))
})
//Add a los participantes al Array
router.post("/:id/addParticipants", (req, res, next) => {

  Event.findByIdAndUpdate( req.params.id,{ $push: { participants: req.user.id } } )
      .then(() => res.redirect(`/events/${req.params.id}`))
      .catch((err) => next(err))
})

//Delete
router.get("/:id/delete", (req, res, next) => {

  Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect(`/events/events-list`))
    .catch((err) => next(err))
})
router.get("/api/:id", (req, res, next) => {
      
  let eventId = req.params.id

  Event.findById(eventId)
    .then((oneEventFromDB) => res.json({ event: oneEventFromDB }))
    .catch((err) => next(err))
})

module.exports = router
