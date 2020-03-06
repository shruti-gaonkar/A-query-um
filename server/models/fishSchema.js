// Require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FishSchema = new Schema({

    scientificName: {
        type: String,
        trim: true,
        required: true
    },
    aliases: [
        {
            type: String,
            trim: true
        }
    ],
    description: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    maxSize: {
        type: String,
        trim: true,
        required: true
    },
    lifespan: {
        type: String,
        trim: true,
        required: true
    },
    diet: {
        type: String,
        trim: true,
        required: true
    },
    minTankSize: {
        type: String,
        trim: true,
        required: true
    },
    tempRange: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    }
});

const Fish = mongoose.model("Fish", FishSchema);

module.exports = Fish;