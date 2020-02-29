# LIRI.JS

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Prerequisites

Liri.js was built to run **in a Node Environment**, with the following Node Packages Installed. (To install node, visit NodeJS Website and install node for your operating system.)

* NPM INIT (Create a local package.json file)
* [npm i node-spotify-api](https://www.npmjs.com/package/node-spotify-api)
* [npm i axios](https://www.npmjs.com/package/axios)
* [npm i moment](https://www.npmjs.com/package/moment)
* [npm i dotenv](https://www.npmjs.com/package/dotenv)

Utilizing NPM AXIOS, liri.js (in conjunction with the above mentioned NPMs) will search the above mentioned API databases through the node command line.

## Instructions

1. Fork and clone this repository

&nbsp;&nbsp;&nbsp;&nbsp;2a. This js file uses a spotify user id and password that is unique to the user. You must obtain your own spotify user ID to fully deploy this app. The 'spotify-this-song' will not work until you do.
  
&nbsp;&nbsp;&nbsp;&nbsp;2b. If you choose to obtain a unique spotify user ID. Then create a hidden .env file in the same root directory, with the following two lines. Substituting YOUR_UNIQUE_ID and YOUR_UNIQUE_SECRET.

_SPOTIFY_ID=YOUR_UNIQUE_ID  
SPOTIFY_SECRET=YOUR_UNIQUE_SECRET_

&nbsp;&nbsp;&nbsp;&nbsp;2c. In order to utilize the 'hidden' .env file, we use the npm dotenv, mentioned previously.

## Usage

### »  » ***spotify-this-song***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using _spotify-this-song_ will output: Artist(s), The song's name, A preview link of the song from Spotify. and The album that the song is from. Usage Example:

```bash
node liri.js spotify-this-song SongName
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The SongName must be single word, or if using multiple words must be put in quotations.

```json
node liri.js spotify-this-song "Billy Jean"
```

### » » ***concert-this***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using _concert-this_ will output: Name of the venue, Venue location, Date of the Event. (Multiple words must be put in quotations). Usage Example:

```bash
node liri.js concert-this BandName
```

### » »  ***movie-this***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using _movie-this_ will output: Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, and Actors in the movie. (Movie titles with multiple words must be put in quotations). Usage Example:

```bash
node liri.js movie-this MovieTitle
```

## Collaborators

![image](/assets/images/SharonPatten.jpg)  | ![image](/assets/images/BrandenPatten.jpg) |
------------- | -------------
[Sharon Patten](https://github.com/EpikNohVuh) |  [Branden Patten](https://github.com/pattenbranden) |

Sharon responsible for main content.  
Branden assisted in spotify api directory structure for the callback, many thanks.

## github Repository

[https://github.com/EpikNohVuh/liri-node-app](https://github.com/EpikNohVuh/liri-node-app)

## Screen Shots

![image](/assets/images/concert-this.jpg)
![image](/assets/images/do-what-it-says01.jpg)
![image](/assets/images/do-what-it-says02.jpg)
![image](/assets/images/do-what-it-says03.jpg)
![image](/assets/images/movie-this.jpg)
![image](/assets/images/spotify-this.jpg)
