window.slide = new SlideNav();

function lightMode() {
    let element = document.getElementById("sun")
    element.style.backgroundColor = "#FFFFFF"
    element.style.color = "#222222"
    document.getElementById('light-mode').style.color = "#222222"
}

function NightMode() {
    let element = document.getElementById("sun")
    element.style.backgroundColor = "#222222"
    element.style.color = "#FFFFFF"
    document.getElementById('light-mode').style.color = "#FFFFFF"
}