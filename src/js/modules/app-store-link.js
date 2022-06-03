export const renderLink = (link) => {
    const button = document.querySelectorAll('.button-get-link')
    const openWIndow = () => window.open(link)
    button.forEach(e => {
        e.addEventListener('click', openWIndow)
    })
}