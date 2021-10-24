function toggleNavigation() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function update_listcord() {
    var elem = document.getElementById("lc_votecount");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://cors-anywhere.herokuapp.com/https://listcord.com/api/bot/418412306981191680", true);
    xhr.setRequestHeader('X-Requested-With', "https://bmobot.xyz");
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status === 200) {
            elem.innerText = "Vote Count: " + xhr.response['votes'];
        }
    };
    xhr.send();
}
update_listcord();
setInterval(update_listcord, 60000);