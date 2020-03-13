const db = require('../../models');

module.exports = {
    getMain: (req, res) => {
        res.send('Welcome to API v1.');
    },
    getTest: (req, res) => {
        res.send('This is a test!');
    },
    findAll: (req, res) => {
        db.Fish.find()
            .then(function (dbFish) {
                res.json(dbFish);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    },
    findBy: (req, res) => {
        const searchQuery = req.params.query;
        db.Fish.find({ aliases: new RegExp(searchQuery, 'i') })
            .then(function (dbFish) {
                res.json(dbFish);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    },
    createFishRecord: (req, res) => {

        db.Fish.create(req)
            .then(function (dbFish) {
                res.json(dbFish);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    },
    findFishById: function (req, res) {
        db.Fish
            .findById(req.params.id)
            .then(dbFish => res.json(dbFish))
            .catch(err => res.json(err));
    },
    updateFishRecord: function (req, res) {
        db.Fish
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbFish => res.json(dbFish))
            .catch(err => res.json(err));
    },
    removeFishRecord: function (req, res) {
        db.Fish
            .findById({ _id: req.params.id })
            .then(dbFish => dbFish.remove())
            .then(dbFish => res.json(dbFish))
            .catch(err => res.json(err));
    }
};