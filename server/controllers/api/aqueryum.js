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
    },

    list: (req, res) => {
        db.User.find({ _id: req.user._id })
            // Specify that we want to populate the retrieved users with any associated notes
            .populate("fishes", "", null, { sort: { 'aliases': 1 } })
            .then(function (dbUser) {
                // If able to successfully find and associate all Users and Notes, send them back to the client
                res.json(dbUser);
            })
            .catch(function (err) {
                // If an error occurs, send it back to the client
                res.json(err);
            });
    },

    delete: (req, res) => {
        db.User.updateOne(
            { _id: req.user._id },
            { $pullAll: { fishes: [req.params.id] } },
            function (err, response) {
                if (err) throw err;
                res.json(response);
            }
        );
    }
};