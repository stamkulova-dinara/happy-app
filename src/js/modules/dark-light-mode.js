const darkModeBlock = document.querySelector('.block-darkmode')
const lightBtn = document.getElementById('light-mode') 
const nightBtn = document.getElementById('night-mode')
const title = document.getElementById("dark-light-mode").textContent; 
const changeTitle = document.getElementById('dark-light-mode')
const text = document.getElementById("darkmode-text").textContent;
const changeWord = document.getElementById('darkmode-text')
 
lightBtn.addEventListener('click', () => {
    darkModeBlock.setAttribute('id', 'light')
    changeTitle.innerText = title.replace('Dark', 'Light')
    changeWord.innerText = text.replace('dark', 'light')
})

nightBtn.addEventListener('click', () => {
    darkModeBlock.removeAttribute('id')
    changeTitle.innerText = title.replace('Light', 'Dark')
    changeWord.innerText = text.replace('light','dark')
})