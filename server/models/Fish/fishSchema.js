// Require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FishSchema = new Schema({

    scientificName: {
        type: String,
        trim: true,
        required: true
    },
    aliases: {
        type: Array,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
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
    maxSizeCM: {
        type: Number,
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
    minTankSizeL: {
        type: Number,
        trim: true,
        required: true
    },
    tempRangeC: {
        type: String,
        trim: true,
        required: true
    },
    aggroLevel: String,
    communityFish: Boolean,
    reefSafe: String,
    notes: String
});

const Fish = mongoose.model("Fish", FishSchema);

module.exports = Fish;