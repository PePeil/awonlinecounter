const dayEl = document.getElementById('day')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')


function countDown(){
    const newYear = new Date(2022, 0, 30)
	const curr = new Date();
	const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
	const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const current = new Date(utc + (KR_TIME_DIFF));

    const diffTime = Math.abs(newYear-current)

    const days = Math.floor( diffTime/(1000*3600*24) )
    const hours = Math.floor( diffTime/(1000*3600) %24)
    const mins = Math.floor( diffTime/(1000*60) %60)
    const seconds = Math.floor( diffTime/(1000) %60)

    dayEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}
function formatTime(time){
    return time < 10 ? (`0${time}`) : (time);
}
countDown()

setInterval(countDown, 1000)