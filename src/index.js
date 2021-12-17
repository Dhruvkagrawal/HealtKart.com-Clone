const express = require("express");
const app = express();
const path = require('path')
const { register, login } = require("./controllers/user.controller");
<<<<<<< Updated upstream
const flashsale_protiensController = require("./controllers/flashsale_protiens.controller");
const CartController = require("./controllers/cart.controller");
=======
const  flashSaleCont = require("./controllers/flashsale_protiens.controller");
>>>>>>> Stashed changes
const passport = require('./configs/passport');

app.use(express.json());

app.use(express.urlencoded());
app.post("/register", register);
app.post("/login", login);
<<<<<<< Updated upstream
app.use("/flashsale", flashsale_protiensController);
app.use("/cart", CartController);


app.set("view engine", "ejs");

=======
app.use("/flashsale", flashSaleCont)
app.set('view engine', 'ejs')
>>>>>>> Stashed changes

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
