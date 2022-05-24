let getCountDown = async() => {
    const response = await fetch('../data/config.json')
    const responseJson = await response.json()
    const date = new Date(responseJson.timerEndDate)
    const currentDate = new Date().getTime()
    const timer = date - currentDate

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

     const days = Math.floor(timer/day)
     const hours = Math.floor((timer % day) / hour)
     const minutes = Math.floor((timer % hour) / minute)
     const seconds = Math.floor((timer % minute) / second)

    function getTimer(e){
        return (e < 10 ? "0" : "") + e;
    }

    document.querySelector(".day").innerText = getTimer(days)
    document.querySelector(".hours").innerText = getTimer(hours)
    document.querySelector(".minutes").innerText = getTimer(minutes)
    document.querySelector(".seconds").innerText = getTimer(seconds)

}
setInterval(getCountDown, 100)