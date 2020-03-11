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
        const searchQuery = `'/${req.body}/i'`;
        db.Fish.find({ aliases: searchQuery })
            .then(function (dbFish) {
                res.json(dbFish);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    },
    createFishRecord: (req, res) => {

        // const data = {
        //     scientificName: "Paracheirodon innesi",
        //     aliases: ["Neon Tetra"],
        //     images: [
        //         {
        //             img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Neonsalmler_Paracheirodon_innesi.jpg",
        //             alt: "Adult Neon Tetra, displaying typical colouration."
        //         }
        //     ],
        //     description: "Neon tetras are a fish!",
        //     type: "Fresh",
        //     maxSizeCM: 30,
        //     lifespan: "5-8 years",
        //     // diet only needs three options: Herbivore, Carnivore, and Omnivore
        //     diet: "Omnivores",
        //     minTankSizeL: 38,
        //     tempRangeC: "21-27",
        //     // community fish is asking if it's a peaceful community fish
        //     communityFish: true,
        //     // reef safe is a true, false, or null if it's not applicable
        //     reefSafe: null
        // };

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