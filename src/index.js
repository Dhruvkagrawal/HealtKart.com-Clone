const express = require("express");

const addressController = require("./controllers/address.controller");
const signupController = require("./controllers/signup.controller");
const loginController = require("./controllers/login.controller");

const app = express();

const passport = require('./configs/passport');

app.use(express.json());
app.use(express.static("public"))

app.set("view engine", "ejs")

app.use("/address", addressController);
app.use("/signup", signupController);
app.use("/login", loginController);


app.use(express.json());

app.use(express.urlencoded());
app.post("/register", register);
app.post("/login", login);

app.use(passport.initialize());

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}),function (req,res){
    console.log(req.profile);
    return res.send(req.user);
}
);


app.get('/auth/google/failure',function (req,res){
    return res.send("failed to login");
})
module.exports = app;














