document.getElementById("socialsBtn").addEventListener("click", function() {
    const link = "https://links.augystudios.com/";
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
        window.location.href = link;
    }
});

document.getElementById("docsBtn").addEventListener("click", function() {
    const link = "https://docs.augystudios.com/";
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
        window.location.href = link;
    }
});

document.getElementById("expBtn").addEventListener("click", function() {
    const link = "https://test.augy.xyz/";
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
        window.location.href = link;
    }
});

document.getElementById("contactBtn").addEventListener("click", function() {
    const link = "https://augystudios.com/contact-us";
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
        window.location.href = link;
    }
});

// Get the current year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

// Find the element with the id "currentYear"
let currentYearElement = document.getElementById("currentYear");

// Update the content of the element with the current year
currentYearElement.textContent = currentYear;