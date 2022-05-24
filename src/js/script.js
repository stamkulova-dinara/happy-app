import config from '../../data/config.json' assert {type: "json"}

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

function appStorelink() {
    const storelink = config.appStoreLink
    console.log(storelink);
    let button = document.getElementById('appStore')
    let a = document.createElement('a')
    a.href = storelink
    a.target = '_blank'
    a.innerText = 'Get this app'
    button.append(a)
}

appStorelink()
