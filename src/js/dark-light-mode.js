let lightBtn = document.getElementById('light-mode') 
let nightBtn = document.getElementById('night-mode')
 
lightBtn.addEventListener('click', function() {
    document.querySelector(".block-darkmode").id = 'light'
    let text = document.getElementById("dark-light-mode").innerHTML; 
    document.getElementById('dark-light-mode').innerHTML = text.replace('Dark', 'Light')
    let word = document.getElementById("darkmode-text").innerHTML; 
    document.getElementById('darkmode-text').innerHTML = word.replace('dark', 'light')
})

nightBtn.addEventListener('click', function() {
    document.querySelector('.block-darkmode').removeAttribute('id')
    let text = document.getElementById("dark-light-mode").innerHTML; 
    document.getElementById('dark-light-mode').innerHTML = text.replace('Light', 'Dark')
    let word = document.getElementById("darkmode-text").innerHTML; 
    document.getElementById('darkmode-text').innerHTML = word.replace('light','dark')
})