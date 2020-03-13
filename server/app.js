const express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    router = require('./routes'),
    mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Bodyparsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve our static build files
app.use(express.static(path.join(__dirname, '../client/build')));
// Provides great rout logging in our console for debugging
app.use(morgan('dev'));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_Omhvm21t:f1shyth1ngs@ds245615.mlab.com:45615/heroku_0mhvm21t";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

if (process.emitWarning.NODE_ENV === "production") {
    app.use(express.static("client/build"))
};

connection.once('open', function () {
    console.log(
        "MongoDB database connection established successfully."
    );
})

// Import the routing setup from our Router 
app.use('/', router);

//Serving react on routes unused by previous routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//Startup
app.listen(PORT, () => {
    console.log(`The API Server is listening on port: ${PORT}`)
})