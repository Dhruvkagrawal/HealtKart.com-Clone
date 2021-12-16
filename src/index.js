const express = require("express");
const app = express();

const { register, login } = require("./controllers/user.controller");
const flashsale_protiensController = require("./controllers/flashsale_protiens.controller");
const passport = require('./configs/passport');

app.use(express.json());


app.post("/register", register);
app.post("/login", login);
app.use("/flashsale", flashsale_protiensController);
app.set('view engine', 'ejs')

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
