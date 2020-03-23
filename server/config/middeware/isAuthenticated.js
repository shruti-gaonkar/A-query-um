// This is middleware for restricting routes a user is not allowed to visit if not logged in

module.exports = function (req, res, next) {
    // If the user isn't logged in, redirect them to the login page
    if (req.originalUrl != "/") {
        return res.redirect("/");
    } else if (!req.user) {
        return next();
    }
};
