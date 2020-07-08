const express = require('express');
const router = express.Router();

const Event = require("../models/event.model")
const User = require("../models/user.model")

//List allEvents
router.get('/events-list', (req, res, next) => {
    
    Event
    .find()
        .populate('owner')
        .populate('participants')
    .then(allEvents => {
        console.log(allEvents)
        res.render('events/events-list', {allEvents})})
    .catch(err => next(err))
        
})

//encontrar todos los usuarios
router.get("/new-event", (req, res) => {
    User
    .find()
    .then(allTheUsers => res.render("events/new-events",allTheUsers))
    .catch(err => next(err))
        
})

//Crear evento
router.post('/new-event', (req, res, next) => {
    const { title, theme, eventDate, owner, participants} = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

     Event
    .create({ title, theme, location, eventDate, user:owner, user:participants  })
    .then(() => res.redirect("/events/events-list"))
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    Event
        .findById(req.params.id)
        .populate('owner')
        .populate('participants')
        .then(theEvent => res.render('events/event-details',theEvent))
        .catch(err => next(err))
})
//Delete
router.get('/:id/delete', (req, res, next) => {
	Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect(`/events/events-list`))
    .catch((err) => next(err));

});


//Maps

router.get('/api', (req, res, next) => {
    Event
        .find({})
        .then(allEventsFromDB => res.json({events: allEventsFromDB}))
        .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {

    let eventId = req.params.id

    Event
        .findById(eventId)
        .then(oneEventFromDB => res.json({event: oneEventFromDB}))
        .catch(err => next(err))
})

 
module.exports = router
