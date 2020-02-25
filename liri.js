// used to store information in the hidden process.env file
require("dotenv").config();
// Importing/requring axios.js. To pull the APIs from their specific sources.
const axios = require('axios');
// requiring node core module, To work with the file system module on your computer. 
const fs = require("fs");
//  import the `keys.js` file and store it in a variable
const keys = require("./keys.js");
// importing A simple to use API library for the Spotify REST API.
const Spotify = require('node-spotify-api');
// accessing spotify keys in 'hidden' file.
const spotify = new Spotify(keys.spotify);
// Importing/requiring moment.js. To construct and output proper date notation.
var moment = require('moment');
//takes in cli argument, and sets it to a variable.
let argvFunction = process.argv[2];
//takes in cli argument, and sets it to a variable.
let argvSearch = process.argv[3];


function concertThis() {
    // axios calls the API within bandsintown, using the search keyword provided.
    axios.get("https://rest.bandsintown.com/artists/" + argvSearch + "/events?app_id=codingbootcamp")
        .then(function (response) {

            // console.log each 'type' of called information.
            console.log("----------- C O N C E R T - T H I S ----------------------");
            console.log("Name of the Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region)
            console.log("Date of the Event: " + moment(response.data[0].datetime).format("MMM Do YYYY hh:00 A"))
            console.log("---------------------------------------------------------");
        });

};

function spotifyThis() {
    // if function was called, but no search was inputted.
    if (argvSearch === undefined) {
        argvSearch = "The Sign"; //default Song, 
    }
    // Spotify has its own npm-spotify to access its own api.
    spotify
        .search({
            type: 'track',
            query: argvSearch
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                // // console.log each 'type' of called information. Limiting to 5 songs.
                for (i = 0; i < data.tracks.items.length && i < 5; i++) {

                    console.log("----------S P O T I F Y - T H I S -----------------------");
                    console.log("\n Artist: " + data.tracks.items[i].artists[0].name)
                    console.log("\n Song: " + data.tracks.items[i].name)
                    console.log("\n URL Preview: " + data.tracks.items[i].preview_url)
                    console.log("\n Album: " + data.tracks.items[i].album.name + "\n")
                    console.log("--------------------------------------------------------");
                }
            }
        });
};

function movieThis() {
    // if function was called, but no search was inputted.
    if (argvSearch == undefined) {
        argvSearch = "Mr Nobody" // default movie
    }

    // axios calls the API within omdbapi, using the search keyword provided.
    axios.get("http://www.omdbapi.com/?t=" + argvSearch + "&y=&plot=short&apikey=trilogy").then(
        function (response) {

            // console.log each 'type' of called information.
            console.log("----------M O V I E - T H I S --------------------");
            console.log("Title: " + response.data.Title);
            console.log("Year Released: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tonatoes Rating: " + response.data.tomatoRating);
            console.log("Country Where Produced: " + response.data.Country);
            console.log("Language of Movie: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors in Movie: " + response.data.Actors);
            console.log("-------------------------------------------------------");
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

};

function doWhatItSays() {
    // reading from specified txt file.
    fs.readFile('random.txt', "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        // seperating the contents of random.txt into two parameters: the function and the search.
        let dataArray = data.split(",");
        argvFunction = dataArray[0]; // the function
        argvSearch = dataArray[1]; // the keyword

        // makes the random.txt dynamic since 3 types of switch/case can be ran from its contents.
        if (dataArray[0] == "concert-this") {
            concertThis(argvSearch)
        } else if (dataArray[0] == "spotify-this-song") {
            spotifyThis(argvSearch)
        } else if (dataArray[0] == "movie-this") {
            movieThis(argvSearch)
        };

    });
};

//Use the switch statement to select one of many code blocks (case) to be executed via the node cli.
switch (argvFunction) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")

};

