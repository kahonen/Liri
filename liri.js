require("dotenv").config();

var keys = require("./keys.js");
var random = require("./random.txt");
var userCommand = process.argv[2];
var userPick = process.argv[3];

if (userCommand === "my-tweets"){
    myTweets();
}
else if(userCommand === "spotify-this-song"){
    spotifySong(userPick);
}
else if(userCommand === "movie-this"){
    movieThis(userPick);
}
else if(userCommand === "do-what-it-says"){
    doSays();
};

function myTweets(){

    var client = new Twitter(keys.twitter);

};

function spotifySong(){

    var spotify = new Spotify(keys.spotify);
        
};

function movieThis(){


};

function doSays(){


};