import config from '../../../data/config.json' assert {type: "json"}

const button = document.querySelector('.header__menu-form__btn')

const openWIndow = () => window.open(config.appStoreLink)

export const appStoreLink = button.addEventListener('click', openWIndow)

// export function appStoreLink() {
//     const button = document.querySelector('.header__menu-form__btn')
//     button.addEventListener('click', alert('hello'))
// } 