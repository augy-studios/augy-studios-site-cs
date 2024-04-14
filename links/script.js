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
let textHover = document.getElementById("textHover")
let titleHover = document.getElementById("titleHover")
let descHover = document.getElementById("descHover")
let urlParams = (new URL(document.location)).searchParams
urlSrc = urlParams.get("src")

function checkUrl() {
    if (!urlSrc || !queryList[urlSrc]) {
        urlSrc = "def"
        history.pushState({}, "", "https://augystudios.com/links?src=def")
    }
}

textChange.textContent = queryList[urlSrc]["displayText"]
titleHover.textContent = queryList[urlSrc]["name"]
descHover.textContent = queryList[urlSrc]["descHover"]

if (queryList[urlSrc]["extLink"]) {
    textChange.href = queryList[urlSrc]["extLink"]
}

textChange.addEventListener("mouseover", showHover)
textChange.addEventListener("mouseout", hideHover)

function showHover() {
    textHover.style.display = "flex"
}

function hideHover() {
    textHover.style.display = "none"
}

window.addEventListener("load", checkUrl)