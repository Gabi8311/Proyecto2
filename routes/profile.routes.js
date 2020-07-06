const express = require('express');
const router = express.Router();
const User = require("../models/user.model")/////////////////
const Movie = require("../models/movies.model")
const Comic = require("../models/comics.model")
const Phrase = require("../models/phrases.model")
const passport = require("passport")



//Saber si está conectado
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render("auth/login", { message: "Área restringida!" })

//Saber si es el propietario del perfil
const isProfileOwner = (req, res, next) => req.params.id === req.user.id ? true : false

//
const checkProfileEdition = (req, res, next) => req.isAuthenticated() && req.params.id === req.user.id ? next() : res.redirect("/login")


//List all

router.get('/comics', (req, res, next) => {
    
    Comic.find()
        .then(allComics => res.render('comics/comics-list', {allComics}))
        .catch(err => next(err))
        
})

router.get('/frases', (req, res, next) => {
    
    Phrase.find()
        .then(allPhrases => res.render('phrases/phrases-list', {allPhrases}))
        .catch(err => next(err))
        
})

//READ one 

router.get('/:id', (req, res, next) => {
    Comic.findById(req.params.id)
        .then(theComic => res.render('comics/comics-details',theComic))
        .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    Phrase.findById(req.params.id)
        .then(thePhrase => res.render('phrases/phrases-details', thePhrase))
        .catch(err => next(err))
})

//Eventos
//routes.get('/privado/crear-evento',(req,res) => res.render('private/new-event'))


         
module.exports = router