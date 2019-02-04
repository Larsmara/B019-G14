var express = require("express");
var router = express.Router();


// ===============================
// Autentikasjon
// ===============================

// Registrerings skjema
router.get("/register", function(req,res){
    res.render("register");
});

// Login skjema
router.get("/login",function(req,res){
    res.render("login");
});

//Root route
router.get("/", function(req,res){
    res.render("landing");
});

module.exports = router;
