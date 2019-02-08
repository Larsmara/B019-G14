var express = require("express"),
    router  = express.Router(),
    middleware = require("../middleware");
    User        = require("../models/user"),
    Project     = require("../models/project");


// INDEX - Viser prosjektoversikt
router.get("/",function(req,res){
    res.render("prosjekter/index", {title:'Prosjekter'});
});

// Nytt prosjekt - Legger et nytt prosjekt til db
router.get("/new", middleware.isLoggedIn , function(req,res){
    res.render("prosjekter/new", {title:'Ny idé'});
});

module.exports = router;