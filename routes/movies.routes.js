const express = require('express');
const router = express.Router();

const Movie = require("../models/movies.model")
const User = require("../models/user.model")////////////////////

router.get('/', (req, res, next) => {

    Movie.find()
        .then(allMovies => res.render('movies/movies-list', {allMovies}))
        .catch(err => next(err))

})

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => res.render('movies/movies-details', theMovie))
        .catch(err => next(err))
})

router.get('/:id/newComment',(req,res,next) =>{
    Movie.findById(req.params.id)
    .then(theComment => res.render('movies/movie-comment-form', theComment))
    .catch(err => next(err))

})

router.post('/:id/newComment',(req,res,next) => {
    const {comments} =req.body
    Movie.findOneAndUpdate(req.params.id,{$push: {comments:comments}})
    .then(() => res.redirect(`/movies/${req.params.id}`))
    .catch(err => next(err))
///Igual podemos hacer con los favoritos///////
})


router.post('/:id/newComment',(req,res,next) => {
    const {comments} =req.body
    Movie.findOneAndUpdate(req.params.id,{$pull: {comments:comments}})
    .then(() => res.redirect(`/movies/${req.params.id}`))
    .catch(err => next(err))

})
         
module.exports = router
