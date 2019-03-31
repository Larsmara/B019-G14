var express = require("express"),
    router  = express.Router(),
    middleware = require("../middleware");
    User        = require("../models/user"),
    Project     = require("../models/project"),
    ProjectSelect = require("../models/project_select");


// INDEX - Viser prosjektoversikt
router.get("/", function(req,res){
    Project.find({}, function(err, allPosts){
        ProjectSelect.find({}, function(err, allUsers){
            if(err){
                console.log(err);
            } else {
                res.render("prosjekter/index", 
                {selected: allUsers, project: allPosts, currentUser: req.user, title:'Prosjekter'});
            }
        });
    });
});

//                res.render("prosjekter/index", {projects: allProjects, post: allProj, currentUser: req.user, title:'Prosjekter'});


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
            req.flash("success", "Din ide er registrert. Denne ideen vil bli vurdert, men vi gjør oppmerksom på at vi ikke kan realisere alle ideer. Ditt innspill kan bidra til et bedre samfunn i Halden.")
            res.redirect("/prosjekter");
        }
    });
});

// SHOW - Viser ideén på egen side
router.get("/:id", function(req,res){
    Project.findById(req.params.id).exec(function(err, foundProject){
        if(err){
            console.log(err);
        }else {
            res.render("prosjekter/show", {project: foundProject, title: foundProject.title});
        }
    });
});


module.exports = router;
