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
//Detalles comics

// router.get('/:id', (req, res, next) => {
//     Comic.findById(req.params.id)
//         .then(theComic => res.render('comics/comics-details',theComic))
//         .catch(err => next(err))
// })

// //Crear comentarios de cómics
// router.get('/:id/newComment',(req,res,next) =>{
//     Comic.findById(req.params.id)
//     .then(theComment => res.render('comics/comics-comment-form', theComment))
//     .catch(err => next(err))

// })
 
module.exports = router