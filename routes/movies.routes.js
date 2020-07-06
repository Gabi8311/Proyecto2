const express = require('express');
const router = express.Router();

const Movie = require("../models/movies.model")

//List allMovies
router.get('/', (req, res, next) => {

    Movie.find()
        .then(allMovies => res.render('movies/movies-list', {allMovies}))
        .catch(err => next(err))
        
})

//Detalles movies

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(theMovie => res.render('movies/movies-details', theMovie))
        .catch(err => next(err))
})

//Crear comentarios de Películas
router.get('/:id/newComment',(req,res,next) =>{
    Movie.findById(req.params.id)
    .then(theComment => res.render('movies/movie-comment-form', theComment))
    .catch(err => next(err))

})

//router.post()
         
module.exports = router