var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");


// ===============================
// Autentikasjon
// ===============================

// Registrerings skjema
router.get("/register", function(req,res){
    res.render("register", {title:'Registrer deg'});
});
// Logikk for registrering
router.post("/register", function(req,res){
    var newUser = new User({username: req.body.username});
    if(req.body.adminCode === "admin") {
        newUser.isAdmin = true;
      }
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err.message);
            return res.render("register", {title:'Registrer deg'});
        } 
            passport.authenticate("local")(req,res,function(){
                console.log("Navn: " + user.username + " e-post: " + user.name + " tlf: " + user.tlf + " admin: " + user.isAdmin);
                res.redirect("mySite");
            });
        
    });
});

// Login skjema
router.get("/login",function(req,res){
    res.render("login", {title:'Login'});
});

// Login logikk
router.post("/login", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "login"
}), function(req,res){
});

// Logut logikk
router.get("/logout", function(req,res){
    req.logOut();
    res.redirect("/");
});


//==========================================================
// Common Routes

// Min side skjema
router.get("/mySite", function(req,res){
    res.render("mySite", {title:'Min side'});
});

// Om oss skjema
router.get("/about", function(req,res){
    res.render("about", {title:'Om oss'});
});

// Admin route
router.get("/admin/backdoor", function(req,res){
    res.send("Velkommen til admin siden!");
});

//Root route
router.get("/", function(req,res){
    res.render("landing", {title: 'Hjem'});
});

module.exports = router;
