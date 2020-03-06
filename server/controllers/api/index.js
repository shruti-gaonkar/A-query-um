const db = require('../../models');

module.exports = {
    getMain: (req, res) => {
        res.send('Welcome to API v1.');
    },
    getAll: (req, res) => {
        db.Fish.findAll({})
            .then(function (dbFish) {
                res.json(dbFish);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    }
};