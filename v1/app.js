var express         = require("express"),
    app             = express(),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    User            = require("./models/user");

    // ROUTES
    var prosjektRoute   = require("./routes/prosjekter"),
        commentRoute    = require("./routes/kommentarer"),
        authRoutes      = require("./routes/index"),
        adminRoute      = require("./routes/admin");


//mongoose.connect("mongodb://localhost:27017/portal_kommune", {useNewUrlParser: true});
mongoose.connect("mongodb://lars:lars12345@ds129625.mlab.com:29625/bachelor_portal", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

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

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

// Henter routes globalt
app.use(authRoutes);
app.use("/prosjekter", prosjektRoute);
app.use(adminRoute);


app.listen(3000, function(){
    console.log("Bachelor server startet");
});