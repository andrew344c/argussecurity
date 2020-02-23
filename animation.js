var overlay = document.getElementById("overlay");
var closeMenu = document.getElementById("close-menu");
var login = document.getElementById("login");
var detection = document.getElementById("detection");

function show() {
    overlay.classList.add("show");
}

function close() {
    overlay.classList.remove("show");
}

function showLogin() {
    login.classList.add("showLogin");
}

function closeLogin() {
    login.classList.remove("showLogin");
}

function showDetection() {
    detection.classList.add("show-gun");
}

function closeDetection() {
    detection.classList.remove("show-gun");
}

document.getElementById("open-menu").addEventListener("click", show);
document.getElementById("close-menu").addEventListener("click", close);
document.getElementById("login-button").addEventListener("click", showLogin);
document.getElementById("close-login").addEventListener("click", closeLogin);
document.getElementById("collapse").addEventListener("click", showDetection);
//document.getElementById("collapse").addEventListener("click", closeDetection);