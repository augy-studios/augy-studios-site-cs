// plays music when clicked
function playCSDL() {

    // list all the songs
    var listOfSongs = [
        "https://cdn.augystudios.com/media/music/nggyu-piano-lt.mp3",
        "https://cdn.augystudios.com/media/music/BenjaminSem-StrangerThings.mp3",
        "https://cdn.augystudios.com/media/music/AnamanaguchiFluxPavilion-Dreams.mp3",
        "https://cdn.augystudios.com/media/music/KarimMikaGabs-SuperficialLove.mp3"
    ];

    // get random song value
    var songValue = Math.floor(Math.random() * listOfSongs.length);
    var randomSong = listOfSongs[songValue];
    var newSongValue;
    var newSong;

    // play the track that loaded with the site
    var audio = document.getElementById("audio");
    audio.src = randomSong;
    audio.play();

    // play the next track
    var nextSong = document.getElementById("nextSong");
    newSongValue = songValue++;
    if (newSongValue > listOfSongs.length) {
        newSongValue = 0;
    }
    newSong = listOfSongs[newSongValue];
    audio.src = newSong;
    audio.play();

    // play the previous track
    var prevSong = document.getElementById("prevSong");
    newSongValue = songValue--;
    if (newSongValue < listOfSongs.length) {
        newSongValue = listOfSongs.length;
    }
    newSong = listOfSongs[newSongValue];
    audio.src = newSong;
    audio.play();

    // indicate the track name
    var songName = document.getElementById("songName");
    var songLink = document.getElementById("songLink");
    switch (songValue) {
        case 0:
            songName = "LittleTranscriber - Never Gonna Give You Up (Piano Version)";
            songLink = "https://open.spotify.com/track/5wMGdx5JDdqTuBQhmvhoAg";
            break;
        case 1:
            songName = "Benjamin Sem - Stranger Things";
            songLink = "https://open.spotify.com/track/2LmdHY81uCcxlwpiNI53dN";
            break;
        case 2:
            songName = "Anamanaguchi & Flux Pavilion - Dreams";
            songLink = "https://open.spotify.com/track/4RWMUN7m78hYp4nvXVCxzJ";
            break;
        case 3:
            songName = "Karim Mika & Gabs - Superficial Love";
            songLink = "https://open.spotify.com/track/0hyAQc7RDsByTmU5Oueq6D";
    }
}

// Get the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;