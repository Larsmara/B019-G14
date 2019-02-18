var express     = require("express"),
    session     = require("express-session"),
    router      = express.Router(),
    passport    = require("passport"),
    mongoose    = require("mongoose"),
    User        = require("../models/user"),
    Project        = require("../models/project"),
    ProjectSelect        = require("../models/project_select");

    var sess;


// Admin dashboard
router.get("/dashboard", function(req,res){
    if(req.user.isAdmin === true){
        Project.find({}, function(err, allProjects){
            User.find({}, function(err, allUsers){
                ProjectSelect.find({}, function(err, selected){
                    if(err){
                        console.log(err);
                    } else {
                        res.render("admin/dashboard", {currentUser: req.user, projects: allProjects, selected: selected,users: allUsers ,title:'Dashboard'});
                    }
                });
            });
        });
    } else {
        res.send("You are not authorized to be here");
    }
});

// Legger til idéen i listen over prosjekter som skal vises til publikum.
router.get("/:id", function(req,res){
    Project.findById(req.params.id).exec(function(err, foundProj) { 
            var title   = foundProj.title,
            image       = foundProj.image,
            text        = foundProj.text,
            createdAt   = foundProj.createdAt,
            showing     = true,
            author      = foundProj.author;

        var selectedProject = { _id: foundProj._id,title: title, image: image, text: text, createdAt: createdAt, showing: showing,author: author};

        ProjectSelect.create(selectedProject, function(err, newSelect){
            if(err){
                console.log(err);
            } else {
                console.log(JSON.stringify(foundProj));
                console.log("=================================================")
                console.log("Tittel: " + title + " image: " + image + " text: " + text + " createdAt: " + createdAt + " author: " + author + " found ID: " + foundProj._id);
                //req.flash("success", "Vises nå til publikum!");
                res.redirect("/dashboard");
            }
        }); 
    });
});

// DESTROY - Sletter prosjektet som vises til publikum.
router.delete("/:id", function(req,res){
    ProjectSelect.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }else{
            //req.flash("error", "Ideén vises ikke lenger for publikum");
            res.redirect("/dashboard");
        }
    });
});

module.exports = router;