var express = require("express"),
    router  = express.Router();


// INDEX - Viser prosjektoversikt
router.get("/",function(req,res){
    res.render("../views/prosjekter/index.ejs");
});

module.exports = router;