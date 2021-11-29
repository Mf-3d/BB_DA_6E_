var version = getParam('ver');
var type = getParam('type');

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if(version === 'dev') {
    alert('ver.1.0.1 Develop Channel.');
}

if (type === 'card') {
    var username = getParam('username');
    var namearea = document.getElementById("name");
    namearea.innerHTML = username;
    var bio = getParam('bio');
    var bioarea = document.getElementById("bio");
    bioarea.innerHTML = bio;
    var hidearea = document.getElementById("hide")
    hidearea.style.display = "none";
    var image = getParam('img');
    var imagearea = document.getElementById("avatar");
    imagearea.innerHTML = `<img class="avatar__image" src="${image}" />`;
}