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

//Update
router.get('/:id', (req, res, next) => {
   
        Event.findById(req.params.id)
            .populate('owner')
            .then(theComic => res.render('events/edit-events',theComic))
            .catch(err => next(err))
    })

    router.post("/:id", (req, res, next) => {
        const { title,theme,location,eventDate,owner,participants} = req.body
    
        Event.findByIdAndUpdate(req.params.id, {title,theme,location,eventDate,owner,participants}, {new: true})
            .then(() => res.redirect(`/events/events-list`))
            .catch(err => next(err))
    })

    //Remove

    router.post('/:idEvents',(req,res,next) => {

        User.findByIdAndRemove(req.params.idEvents)
          .then(() => res.redirect('/events/events-list'))
          .catch(err => next(err))
        
        })

    module.exports = router
