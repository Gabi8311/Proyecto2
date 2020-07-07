const express = require('express');
const router = express.Router();

const Movie = require("../models/movies.model")
const User = require("../models/user.model")


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
router.post('/:id/newComment',(req,res,next) => {////////////Preguntar
    const {comments} =req.body
    Movie.create({ comments })
    .then(() => res.redirect(`/movies/${req.params.id}`))
    .catch(err => next(err))

})
//router.post()
         
module.exports = router




// router.post("/:id", isLoggedIn, checkProfileEdition, (req, res) => {
//     const {
//         skills,
//         hobbies
//     } = req.body
//     User.findByIdAndUpdate(req.params.id, {
//             skills,
//             hobbies
//         }, {
//             new: true
//         })
//         .then((user) => res.redirect(`/profiles/${user.id}`))
//         .catch(err => console.log("There was an error in the DDBB: ", err))
// })