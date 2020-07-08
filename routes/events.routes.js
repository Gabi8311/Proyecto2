const express = require('express');
const router = express.Router();

const Event = require("../models/event.model")
const User = require("../models/user.model")

//encontrar todos los usuarios
router.get("/new-event", (req, res) => {
    User
    .find()
    .then(allUsers => res.render("events/new-events",allUsers))
    .catch(err => next(err))
        
})
//Crear evento
router.post('/new-event', (req, res, next) => {
    const { title,theme,location,eventDate,owner,participants } = req.body

Event
.create({ title,theme,location,eventDate,owner,participants})
.then(() => res.redirect("/events/events-list"))
.catch(err => next(err))
})

//List allEvents
router.get('/events-list', (req, res, next) => {
    
    Event.find()
    .populate('owner')
    .then(allEvents => res.render('events/events-list', {allEvents}))
    .catch(err => next(err))
        
})

router.post('/new-event', (req, res, next) => {
    const { title,theme,location,owner,participants } = req.body
Event
.create({ title,theme,location,owner,participants })
.then(() => res.redirect("/events/events-list"))
.catch(err => next(err))
})

router.get('/api', (req, res, next) => {
    Event.find({})
        .then(allEventsFromDB => res.json({
            events: allEventsFromDB
        }))
        .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {

    let eventId = req.params.id

    Event.findById(eventId)
        .then(oneEventFromDB => res.json({
            event: oneEventFromDB
        }))
        .catch(err => next(err))
})

 
module.exports = router
