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

// Define the query list
let queryList = {
    def: {
        name: "Default",
        source: "none",
        displayText: "How did we get here?",
        extLink: "https://augystudios.com/",
        descHover: "It looks like you got this link without scanning a QR code or being redirected! What kind of sorcery is that?",
        status: "active",
    },
    linktree: {
        name: "Legacy Linktree",
        source: "legacy",
        displayText: "You got here from the Legacy Linktree site!",
        extLink: "https://links.augystudios.com/",
        descHover: "Wow, you're a legacy! Click to get back there.",
        status: "active",
    },
    linkedin: {
        name: "LinkedIn",
        source: "linkedin",
        displayText: "How's the LinkedIn?",
        extLink: "https://www.linkedin.com/in/augyteo/",
        descHover: "Can you believe it? Augy Studios was created in Feb 2013! There's just no LinkedIn page back then. Click to get back there.",
        status: "active",
    },
    social: {
        name: "Social Media",
        source: "socials",
        displayText: "Did you come from Twitter, Telegram, or Instagram?",
        extLink: "https://discord.augystudios.com/",
        descHover: "Share it with us in our Discord server!",
        status: "active",
    },
    bio: {
        name: "Bio from 2021",
        source: "bio-2021",
        displayText: "Are you expecting to see Augy's bio (from 2021)?",
        extLink: "https://paste.hep.gg/raw/etuwi",
        descHover: "You're in luck! Click to get back there.",
        status: "active",
    },
    tid: {
        name: "GFTV Team ID",
        source: "gftv-team-id",
        displayText: "You scanned the QR code on Augy's Global Furry Television (GFTV) Team ID!",
        extLink: "https://globalfurrytv.news.blog/about-us/#jp-carousel-8925",
        descHover: "The GFTV Team ID is a unique identifier of every GFTV Team Member. Augy is an Events Director & Content Editor at GFTV.",
        status: "active",
    },
    "biz-1": {
        name: "Augy Studios Business Card 1",
        source: "bizcard-1",
        displayText: "You scanned the QR code on the first ever Augy Studios business card!",
        extLink: "https://augystudios.com/",
        descHover: "This is also Augy's first time creating a translucent name card; it took 7 iterations to get to this current design! Click to go to the Augy Studios website.",
        status: "active",
    },
    "nc-1": {
        name: "Augy's Name Card 1",
        source: "namecard-1",
        displayText: "You scanned the QR code on Augy's 1st ever Name Card!",
        extLink: "https://links.augystudios.com/augywolfy",
        descHover: "A furry name card is a personal creation that displays everything you need to know about the person you met. Augy's 1st name card features his old fursona name and species, being a wolf.",
        status: "active",
    },
    "nc-3": {
        name: "Augy's Name Card 3",
        source: "namecard-3",
        displayText: "You scanned the QR code on Augy's 3rd iteration of his Name Card!",
        extLink: "https://augystudios.com/",
        descHover: "A furry name card is a personal creation that displays everything you need to know about the person you met. Augy's 3rd name card features his new Telegram sticker pack's sticker.",
        status: "active",
    },
    lifc24: {
        name: "LIFC 2024",
        source: "lifc24-conbadge",
        displayText: "You scanned the NFC Tag on Augy's Little Island Furcon (LIFC) 2024 Conbadge!",
        extLink: "https://furcon.augystudios.com/sg/lifc-2024",
        descHover: "LIFC is a furry convention held annually in Singapore. This year, Augy is both volunteering and is a Super Sponsor!",
        status: "active",
    },
    furum24: {
        name: "FurUM 2024",
        source: "furum24-conbadge",
        displayText: "You scanned the NFC Tag on Augy's Furs Upon Malaysia (FurUM) 2024 Conbadge!",
        extLink: "https://augystudios.com/",
        descHover: "FurUM is a furry convention held annually in Petaling Jaya Malaysia.",
        status: "inactive",
    }
}

function checkUrl() {
    if (!urlSrc || !queryList[urlSrc]) {
        urlSrc = "def"
        history.pushState({}, "", "https://augystudios.com/links?src=def")
    }
}

// Update the element with the id "textChange" based on query
let textChange = document.getElementById("textChange")
let textOriginal = document.getElementById("textOriginal")
let textHover = document.getElementById("textHover")
let titleHover = document.getElementById("titleHover")
let descHover = document.getElementById("descHover")
let urlParams = (new URL(document.location)).searchParams

urlSrc = urlParams.get("src")
checkUrl()
textOriginal.textContent = queryList[urlSrc]["displayText"]
descHover.textContent = queryList[urlSrc]["descHover"]

if (queryList[urlSrc]["extLink"]) {
    textChange.href = queryList[urlSrc]["extLink"]
}

// Install the PWA if able
let installPrompt = null;
const installButton = document.querySelector("#install")
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault()
    installPrompt = event
    installButton.removeAttribute("hidden")
})

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
        return
    }
    const result = await installPrompt.prompt()
    console.log(`Install prompt was: ${result.outcome}`)
    disableInAppInstallPrompt()
})

window.addEventListener("appinstalled", () => {
    disableInAppInstallPrompt()
})

function disableInAppInstallPrompt() {
    installPrompt = null
    installButton.setAttribute("hidden", "")
}

let installParent = document.getElementById("installParent");
const isTouchDevice = () => {
    try {
        //We try to create touch event. It would fail for desktops and throw an error.
        document.createEvent("TouchEvent")
        installParent.classList.add("showTable")
        descHover.textContent.replace("Click", "Tap").replace("click", "tap")
        console.log("This is a touch device")
    } catch (e) {
        installParent.classList.remove("showTable")
        console.log("This is not a touch device")
    }
}
isTouchDevice()