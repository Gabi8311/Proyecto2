const express = require('express');
const router = express.Router();
const User = require("../models/user.model")
//const passport = require("passport")

const isLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render("auth/login", {message: "Inicia sesión"})

const isProfileOwner = (req, res, next) => req.params.id === req.user.id ? true : false

const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/auth/login')

//const checkProfileEdition = (req, res, next) => req.isAuthenticated() && req.params.id === req.user.id ? next() : res.redirect("/auth/login")

const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect("auth/login", {
    message: "Area Restringida!"

})

router.get('/', checkAuthenticated, (req, res) => {
    const currentUser = req.user
    const checkAdmin = () => req.user.role.includes('ADMIN')
    res.render('private/principal', { currentUser,checkAdmin: checkAdmin })

})     

router.get("/list", checkRole(['ADMIN']), (req, res, next) => {
    const checkAdmin  = () => req.user.role.includes('ADMIN')
    

    User.find({}, {username: 1})
        .then(allUsers => res.render("private/profile-list", {allUsers,checkAdmin: checkAdmin}))
        .catch(err => console.log("Error en la BBDD ", err))

})

router.get("/:id", isLoggedIn, (req, res) => {
    const isOwner = isProfileOwner(req)

    User.findById(req.params.id)
        .then(user => res.render("private/profile-edition", {user,isOwner: isOwner}))
        .catch(err => console.log("Error en la BBDD ", err))

})

router.get("/list/:id/edit", checkRole(['ADMIN']), (req, res) => {

    User.findById(req.params.id)
        .then(user => res.render("private/profile-edition", user))
        .catch(err => console.log("Error en la BBDD ", err))

})

router.post("/:id", checkRole(['ADMIN']), (req, res) => {
    const {role,myEvents} = req.body

    User.findByIdAndUpdate(req.params.id, {role,myEvents}, {new: true})
        .then(() => res.redirect(`/profile/list`))
        .catch(err => console.log("Error en la BBDD ", err))
})

router.post('/list/:idUser',(req,res) => {

    User.findByIdAndRemove(req.params.idUser)
      .then(() => res.redirect('/profile/list'))
      .catch(err => console.log('Error en la BBDD ',err))
    
    })

module.exports = router