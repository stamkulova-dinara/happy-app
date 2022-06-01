export const renderLink = (link) => {
    const button = document.querySelector('.header__menu-form__btn')
    const openWIndow = () => window.open(link)
    button.addEventListener('click', openWIndow)
}