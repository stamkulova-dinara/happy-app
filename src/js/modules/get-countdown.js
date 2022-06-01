export const getCountDown = (date) => {
  const timerEndDate = new Date(date)

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId
function countDown() {
  const today = new Date()
  const timeSpan = timerEndDate - today

  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  document.querySelector(".day").innerText = days
    document.querySelector(".hours").innerText = hours
    document.querySelector(".minutes").innerText = minutes
    document.querySelector(".seconds").innerText = seconds
}
    
    timerId = setInterval(countDown, second)
}