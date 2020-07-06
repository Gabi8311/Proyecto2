const express = require('express');
const router = express.Router();

const Event = require("../models/event.model")

//List allEvents
router.get('/', (req, res, next) => {
    
    Event.find()
        .then(allEvents => res.render('events/events-list', {allEvents}))
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