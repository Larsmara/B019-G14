var express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose");

mongoose.connect("mongodb://localhost:27017/portal_kommune", {useNewUrlParser: true});
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("Heei dere");
});

app.listen(3000, function(){
    console.log("Bachelor server startet");
});