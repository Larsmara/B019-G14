var express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose");

    // ROUTES
    var prosjektRoute   = require("./routes/prosjekter"),
        commentRoute    = require("./routes/kommentarer"),
        authRoutes      = require("./routes/index");

mongoose.connect("mongodb://localhost:27017/portal_kommune", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/public"));

app.use(authRoutes);
app.use("/prosjekter", prosjektRoute);


app.listen(3000, function(){
    console.log("Bachelor server startet");
});