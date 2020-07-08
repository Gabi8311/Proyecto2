const express = require('express');
const router = express.Router();
const Event = require("../models/event.model")
const User = require("../models/user.model")
//List allEvents
router.get('/events-list', (req, res, next) => {
    
    Event.find()
    //.populate(user)////////////////
    .then(allEvents => res.render('events/events-list', {allEvents}))
    .catch(err => next(err))
        
})
router.get("/new-event", (req, res) => res.render("events/new-events"))

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