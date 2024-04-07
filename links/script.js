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
    var randomSong = listOfSongs[Math.floor(Math.random() * listOfSongs.length)];

    // play the track that loaded with the site
    var audio = document.getElementById("audio");
    audio.src = randomSong;
    audio.play();
}

// Get the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;