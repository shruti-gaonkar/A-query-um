const db = require('../../models');

module.exports = {
    save: (req, res) => {
        // Create a new Note in the db
        db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { fishes: req.body.fish_id } }, { new: true })
            .then(function (dbUser) {
                // If the User was updated successfully, send it back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    }
};