// plays music when clicked
function playCSDL() {

    // list all the songs
    var listOfSongs = [
        "https://cdn.augystudios.com/media/music/nggyu-piano-lt.mp3",
        "https://cdn.augystudios.com/media/music/BenjaminSem-StrangerThings.mp3",
        "https://cdn.augystudios.com/media/music/AnamanaguchiFluxPavilion-Dreams.mp3",
        "https://cdn.augystudios.com/media/music/KarimMikaGabs-SuperficialLove.mp3"
    ]

    // get random song value
    var randomSong = listOfSongs[Math.floor(Math.random() * listOfSongs.length)]

    // play the track that loaded with the site
    var audio = document.getElementById("audio")
    audio.src = randomSong
    audio.play()
}

// Get the current year for the copyright footer text
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentYear")
currentYearElement.textContent = currentYear;

// Update the element with the id "textChange" based on query
let textChange = document.getElementById("textChange")
let urlParams = (new URL(document.location)).searchParams
switch ((urlParams.get("src")).toLowerCase()) {
    case "linktree":
        break
    case "tid":
        break
    case "nc-4":
        break
    case "lifc24":
        break
    case "furum24":
        break
    case null:
    case "":
    case "def":
        break
    default:
        updateDefUrl()
        break
}

function updateDefUrl() {
    history.pushState({}, "", "https://augystudios.com/links?src=def")
}
window.addEventListener("load", updateDefUrl)