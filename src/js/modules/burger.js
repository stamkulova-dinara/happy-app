export const burgerClose = () => {
    const menuItem = document.querySelectorAll('.header__hamburger-menu ul li')
    const menuToggle = document.getElementById('menu__toggle')
    menuItem.forEach(e => {
        e.addEventListener('click', () => menuToggle.checked = false)
    })
}