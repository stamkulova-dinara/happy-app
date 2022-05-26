import config from '../../../data/config.json' assert {type: "json"}

const button = document.querySelector('.header__menu-form__btn')

button.addEventListener('click', () => {
    window.open(config.appStoreLink)
})
