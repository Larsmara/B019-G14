var express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    User            = require("./models/user");

    // ROUTES
    var prosjektRoute   = require("./routes/prosjekter"),
        commentRoute    = require("./routes/kommentarer"),
        authRoutes      = require("./routes/index");


mongoose.connect("mongodb://localhost:27017/portal_kommune", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Passport konfigurasjon
app.use(require("express-session")({
    secret: "Vi er den beste bachelorgruppen",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Henter routes globalt
app.use(authRoutes);
app.use("/prosjekter", prosjektRoute);


app.listen(3000, function(){
    console.log("Bachelor server startet");
});