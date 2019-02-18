var express         = require("express"),
    session         = require("express-session"),
    app             = express(),
    mongoose        = require("mongoose"),
    bodyParser      = require("body-parser"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    localStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
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
app.use(methodOverride("_method"));

// Passport konfigurasjon
app.use(require("express-session")({
    secret: "Vi er den beste bachelorgruppen",
    resave: false,
    saveUninitialized: false
}));

app.locals.moment = require("moment");

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

// Henter routes globalt
app.use(authRoutes);
app.use("/prosjekter", prosjektRoute);
app.use(adminRoute);


app.listen(3000, function(){
    console.log("Bachelor server startet");
});