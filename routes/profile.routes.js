const express = require('express');
const router = express.Router();
const User = require("../models/user.model")
const passport = require("passport")



//Saber si está conectado
const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render("auth/login", { message: "Área restringida!" })

//Saber si es el propietario del perfil
const isProfileOwner = (req, res, next) => req.params.id === req.user.id ? true : false

//
const checkProfileEdition = (req, res, next) => req.isAuthenticated() && req.params.id === req.user.id ? next() : res.redirect("/login")



//Eventos
//routes.get('/privado/crear-evento',(req,res) => res.render('private/new-event'))


         
module.exports = router