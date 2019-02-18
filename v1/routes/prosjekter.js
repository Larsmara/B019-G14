var express = require("express"),
    router  = express.Router(),
    middleware = require("../middleware");
    User        = require("../models/user"),
    Project     = require("../models/project"),
    ProjectSelect = require("../models/project_select");


// INDEX - Viser prosjektoversikt
router.get("/", function(req,res){
    ProjectSelect.find({}, function(err, allProjects){
        if(err){
            console.log(err);
        } else {
            res.render("prosjekter/index", {projects: allProjects, currentUser: req.user, title:'Prosjekter'});
        }
    }); 
});

// SHOW - Viser skjema for å registrere ny ide
router.get("/new", middleware.isLoggedIn , function(req,res){
    res.render("prosjekter/new", {title:'Ny idé'});
});

// CREATE - Legger til nytt prosjekt i databasen
router.post("/",function(req,res){
    var title = req.body.title,
        img = req.body.img,
        text = req.body.text;
    var author = { id: req.user._id, username: req.user.username, name: req.user.name };

    var newProject = {title: title, img: img, text: text, author: author, createdAt: Date.now()};

    Project.create(newProject, function(err, newlyCreatedPost){
        if(err){
            console.log(err);
        } else {
            res.redirect("/prosjekter");
        }
    });
});

// EDIT - Tror ikke vi trenger? 

// DESTROY - Tror ikke vi trenger? 

// Ide mottat
router.get("/ideSendt", function(req,res){
    res.render("prosjekter/ideSendt", {title:'Takk for din ide!'});
});

module.exports = router;