//jshint esversion:6
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.set("view engine", "ejs"); // Set the view engine to EJS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(session({
    secret: 'Our secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Change to false if not using HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema); // Use uppercase for model name

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/login", function (req, res) {
    res.render("login.ejs");
});

// Handle the login logic
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login"
}));

app.get("/register", function (req, res) {
    res.render("register.ejs");
});

app.post("/register", async function (req, res) {
    try {
        const newUser = new User({ username: req.body.username });
        await User.register(newUser, req.body.password);
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secrets");
        });
    } catch (error) {
        console.log(error);
        res.redirect("/register");
    }
});

app.get("/secrets", function(req, res) {
    if (req.isAuthenticated()) {
        res.render("secrets.ejs");
    } else {
        res.redirect("/login");
    }
});

app.listen(3000, () => {
    console.log("Server started");
});

const main = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/secrets", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

main();
