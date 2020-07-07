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
    Comic.findOneAndUpdate(req.params.id,{$push: {comments:comments}})
    .then(() => res.redirect(`/comics/${req.params.id}`))
    .catch(err => next(err))

})
         
module.exports = router