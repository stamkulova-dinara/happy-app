import config from '../../data/config.json' assert {type: "json"}

function appStorelink() {
    const storelink = config.appStoreLink
    let button = document.getElementById('appStore')
    let a = document.createElement('a')
    a.href = storelink
    a.target = '_blank'
    a.innerText = 'Get this app'
    button.append(a)
}

appStorelink()