const express = require("express")
const router = express.Router()
const passport = require("passport")
const User = require("../models/user.model")
const bcrypt = require("bcrypt")
const bcryptSalt = 10

// User signup

const checkAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.redirect('/auth/login')

//Ver que rol tiene
const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.redirect("auth/login", {
    message: "Area Restringida!"
})
router.get("/signup", (req, res) => res.render("auth/signup"))

router.post("/signup", (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.render("auth/signup", { errorMsg: "Rellena el usuario y la contraseña" })
        return

    }

    User.findOne({ username })

        .then(user => {
            if (user) {
                res.render("auth/signup", { errorMsg: "El usuario ya existe en la BBDD" })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User.create({ username, password: hashPass })
                .then(() => res.redirect("/"))
                .catch(() => res.render("auth/signup", { errorMsg: "No se pudo crear el usuario" }))
        })
        .catch(error => next(error))

})
// User login
router.get('/login', (req, res) => res.render('auth/login', { "errorMsg": req.flash("error") }))

router.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true,
    badRequestMessage: 'Rellena todos los campos'
   
}))
// User logout
router.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/auth/login")

})

module.exports = router

