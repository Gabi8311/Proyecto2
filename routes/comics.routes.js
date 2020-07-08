const express = require('express');
const router = express.Router();

const Comic = require("../models/comics.model")

router.get('/', (req, res, next) => {
    
    Comic.find()
        .then(allComics => res.render('comics/comics-list', {allComics}))
        .catch(err => next(err))
        
})

router.get('/:id', (req, res, next) => {
    Comic.findById(req.params.id)
        .then(theComic => res.render('comics/comics-details',theComic))
        .catch(err => next(err))
})

router.get('/:id/newComment',(req,res,next) =>{

    Comic.findById(req.params.id)
    .then(theComment => res.render('comics/comics-comment-form', theComment))
    .catch(err => next(err))

})

router.post('/:id/newComment',(req,res,next) => {
    const {comments} =req.body

    Comic.findByIdAndUpdate(req.params.id,{$push: {comments:comments}})
    .then(() => res.redirect(`/comics/${req.params.id}`))
    .catch(err => next(err))

})

router.get('/:id',(req,res) => {

    Coaster.findById(req.params.idCoaster)
      .populate('park') 
      .then(theCoaster => res.render('coasters/coaster-details',theCoaster))
      .catch(err => console.log('Error en la BBDD ',err))
    
})

    router.post('/:idCoaster',(req,res) => {

        Coaster.findByIdAndRemove(req.params.idCoaster)
          .then(() => res.redirect('coasters/lista'))
          .catch(err => console.log('Error en la BBDD ',err))
        
 })
         
module.exports = router