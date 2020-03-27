const express = require('express')
const router = express.Router();
const db = require('../../models');
const passport = require("../../config/passport");

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../../config/middeware/isAuthenticated");

var auth = function (req, res, next) {
    return passport.authenticate('local', function (err, user, info) {
        if (info) { return next(info.message); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function (loginErr) {
            if (loginErr) { return res.json({ "err": loginErr }); }
            res.json({ user: user });
        });
    });
}

router.post("/", function (req, res, next) {
    db.User.create(req.body)
        .then(function () {
            auth(req, res, next)(req, res, next);
        })
        .catch(function (err) {
            res.json({ error: err });
        });
});

// Route for logging user in
router.post('/login', function (req, res, next) {
    auth(req, res, next)(req, res, next);
});

// Route for logging user out
router.get("/logout", function (req, res) {
    req.session.destroy(function (err) {
        res.json({ message: "Successfully Logged Out" });
    });
});

router.get("/isAuthenticated", function (req, res) {
    //console.log(req.user);
    if (req.user) {
        res.json({ loggedIn: true, user: req.user });
    } else {
        res.json({ loggedIn: false });
    }
});

router.post("/changeUser", function (req, res) {
    console.log(req.body);
    db.User.findOneAndUpdate({ '_id': req.user._id }, { 'username': req.body.username }, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err })
        return res.send('Successfully updated');
    })
})

router.post('/changepic', function (req, res) {
    console.log(req.body);
    db.User.findOneAndUpdate({ '_id': req.user._id}, {'userpic': req.body.userpic}, {upsert: false}, function(err){
        if (err) return res.send(500, { error: err })
        return res.send('Successfully updated');
    })
})

module.exports = router;