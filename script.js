document.getElementById("socialsBtn").addEventListener("click", function (event) {
    let target = event.target;

    while (target !== this) {
        if (target.classList.contains('box')) {
            const link = "https://links.augystudios.com/main";

            const newWindow = window.open(link, "_blank");

            if (!newWindow) {
                window.location.href = link;
            }

            return;
        }
        target = target.parentNode;
    }
});

document.getElementById("docsBtn").addEventListener("click", function (event) {
    let target = event.target;

    while (target !== this) {
        if (target.classList.contains('box')) {
            const link = "https://docs.augystudios.com/";

            const newWindow = window.open(link, "_blank");

            if (!newWindow) {
                window.location.href = link;
            }

            return;
        }
        target = target.parentNode;
    }
});

document.getElementById("expBtn").addEventListener("click", function (event) {
    let target = event.target;

    while (target !== this) {
        if (target.classList.contains('box')) {
            const link = "https://test.augy.xyz/";

            const newWindow = window.open(link, "_blank");

            if (!newWindow) {
                window.location.href = link;
            }

            return;
        }
        target = target.parentNode;
    }
});

document.getElementById("contactBtn").addEventListener("click", function (event) {
    let target = event.target;

    while (target !== this) {
        if (target.classList.contains('box')) {
            const link = "https://augystudios.com/contact-us";

            const newWindow = window.open(link, "_blank");

            if (!newWindow) {
                window.location.href = link;
            }

            return;
        }
        target = target.parentNode;
    }
});