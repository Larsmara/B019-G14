var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// ===============================
// Autentikasjon
// ===============================

// Registrerings skjema
router.get("/register", function(req,res){
    res.render("register");
});
// Logikk for registrering
applicationCache.use("/register", function(req,res){
    var newUser = new User({});
})

// Login skjema
router.get("/login",function(req,res){
    res.render("login");
});

// Min side skjema
router.get("/mySite", function(req,res){
    res.render("mySite");
});

// Om oss skjema
router.get("/about", function(req,res){
    res.render("about");
});

//Root route
router.get("/", function(req,res){
    res.render("landing");
});

module.exports = router;
