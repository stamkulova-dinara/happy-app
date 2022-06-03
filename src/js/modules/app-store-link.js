export const renderLink = (link) => {
    const button = document.querySelectorAll('.header__menu-form__btn')
    const openWIndow = () => window.open(link)
    button.forEach(e => {
        e.addEventListener('click', openWIndow)
    })
}