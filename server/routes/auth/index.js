const express = require('express')
const router = express.Router()
//var passport = require('passport');
const db = require('../../models');
const passport = require("../../config/passport");

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../../config/middeware/isAuthenticated");

//const LocalStrategy = require("passport-local").Strategy;


var auth = function (req, res, next) {
    return passport.authenticate('local', function (err, user, info) {
        if (info) { return next(info.message); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function (loginErr) {
            console.log(loginErr);
            if (loginErr) { return res.json({ "err": loginErr }); }
            res.json({ "user": user });
            //return res.redirect('/');
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
        loggedIn = 0;
        res.render('index');
    });
});

/*const passport = require('../../passport');
const db = require('../../models');

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, email, firstName } = req.body

    db.User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new db.User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

//Login function calls axios to api/login; router here will have to handle post request and execute here
router.post('/login', function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
},
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router*/

/*const LocalStrategy = require('passport-local').Strategy;
const db = require('../../models');
const bCrypt = require('bcryptjs');

router.post('/', (req, res) => {

    // Generates hashed password using bCrypt
    var createHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
    passport.use('signup', new LocalStrategy({
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) {

            findOrCreateUser = function () {
                // find a user in Mongo with provided username
                console.log("One");
                db.User.findOne({ 'username': username }, function (err, user) {
                    console.log("this is the user inside findOne", user);
                    // In case of any error, return using the done method
                    if (err) {
                        console.log('Error in SignUp: ' + err);
                        return done(err);
                    }
                    // already exists
                    if (user) {
                        console.log('User already exists with username: ' + username);
                        return done(null, false, req.flash('message', 'User Already Exists'));
                    } else {
                        // if there is no user with that email
                        // create the user
                        var newUser = new db.User();

                        // set the user's local credentials
                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.param('email');
                        newUser.firstName = req.param('firstName');


                        // save the user
                        newUser.save(function (err) {
                            if (err) {
                                console.log('Error in Saving user: ' + err);
                                throw err;
                            }
                            console.log('User Registration succesful');
                            return done(null, newUser);
                        });
                    }
                });
            };

            process.nextTick(findOrCreateUser);
        })
    );



});
*/
module.exports = router;