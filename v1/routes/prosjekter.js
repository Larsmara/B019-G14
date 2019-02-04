var express = require("express"),
    router  = express.Router();


// INDEX - Viser prosjektoversikt
router.get("/",function(req,res){
    res.render("../views/prosjekter/index.ejs");
});

// Nytt prosjekt - Legger et nytt prosjekt til db
router.get("/new", function(req,res){
    res.render("prosjekter/new");
});

module.exports = router;