var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user"),
    Project        = require("../models/project"),
    ProjectSelect        = require("../models/project_select");


// Admin dashboard
router.get("/dashboard", function(req,res){
    if(req.user.isAdmin === true){
        Project.find({}, function(err, allProjects){
            User.find({}, function(err, allUsers){
                if(err){
                    console.log(err);
                } else {
                    res.render("admin/dashboard", {currentUser: req.user, projects: allProjects, users: allUsers ,title:'Dashboard'});
                }
            });
        });
    } else {
        res.send("You are not authorized to be here");
    }
});

router.get("/:id", function(req,res){
    Project.findById(req.params.id).exec(function(err, foundProj){
        var title      = foundProj.title,
            image       = foundProj.image,
            text        = foundProj.text,
            createdAt   = foundProj.createdAt,
            author      = foundProj.author;

        var selectedProject = {title: title, image: image, text: text, createdAt: createdAt, author: author};

        if(err){
            console.log(err);
        }else{
            console.log(JSON.stringify(foundProj));
            console.log("Tittel: " + title + " image: " + image + " text: " + text + " createdAt: " + createdAt + " author: " + author);
            res.redirect("/")
        }
    });
})

module.exports = router;