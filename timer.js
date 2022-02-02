
const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
const day = new Date()
const today = day.getDay()

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября']
const month = new Date()
const thisMonth = month.getMonth()

const year = new Date().getFullYear()
const dayNumber = new Date().getDate()


document.getElementById("date").innerHTML = days[today] + ' ' + '(' + dayNumber + ' ' + months[thisMonth] + ',' + ' ' + year +'г' + ')'


function clock () {
const time = new Date ()

const timeNow = [time.getHours(), time.getMinutes(), time.getSeconds()]

if(timeNow[0] < 10){
    timeNow[0] = "0"+ timeNow[0]
}
if(timeNow[1] < 10){
    timeNow[1] = "0"+ timeNow[1]
}
if(timeNow[2] < 10){
    timeNow[2] = "0"+ timeNow[2]
}


const current_time = timeNow.join(':')

document.getElementById("time").innerHTML = current_time

setTimeout(clock, 1000)
}

clock()

let endDate = new Date("Feb 12, 2022 12:00:00").getTime()
let timer = function() {
    let now = new Date().getTime()
    let t = endDate - now
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
        let secs = Math.floor((t % (1000 * 60)) / 1000)
    
        document.getElementById("timer-days").innerHTML = days + "<div class='show_date'>дни</div>"
        document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) + "<div class='show_date'>часы</div>"
        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) + "<div class='show_date'>минуты</div>"
        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) + "<div class='show_date'>секунды</div>"
    
    } else {
        document.getElementById("timer").innerHTML = "Похоже время истекло :)"
    }
    setTimeout(timer, 1000)

}

timer()