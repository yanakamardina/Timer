
const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
const day = new Date()
const today = day.getDay()

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября']
const month = new Date()
const thisMonth = month.getMonth()

const year = new Date().getFullYear()
const dayNumber = new Date().getDate()


document.getElementById("date").innerHTML = `${days[today]} (${dayNumber} ${months[thisMonth]}, ${year})`


function clock () {
const time = new Date ()

const timeNow = [
    time.getHours(), 
    time.getMinutes(), 
    time.getSeconds()
].map(timeIs => timeIs < 10 ? "0" + timeIs : timeIs)

const current_time = timeNow.join(':')

document.getElementById("time").innerHTML = current_time

setTimeout(clock, 1000)
}

clock()

let endDate = new Date("Feb 12, 2022 12:00:00").getTime()

let sixty_seconds = 1000 * 60
let sixty_minutes = sixty_seconds * 60
let twenty_four_hours = sixty_minutes * 24





let timer = function() {
    let now = new Date().getTime()
    let t = endDate - now
    
    if (t >= 0) {
    
        let days = Math.floor(t / twenty_four_hours);
        let hours = Math.floor((t % twenty_four_hours) / (sixty_minutes))
        let mins = Math.floor((t % sixty_minutes) / sixty_seconds)
        let secs = Math.floor((t % sixty_seconds) / 1000)

        let show_day = document.getElementById("timer-days")
        show_day.innerHTML = days

        let show_hours = document.getElementById("timer-hours")
        show_hours.innerHTML = ("0" + hours).slice(-2)

        let show_mins = document.getElementById("timer-mins")
        show_mins.innerHTML = ("0" + mins).slice(-2)

        let show_secs = document.getElementById("timer-secs")
        show_secs.innerHTML = ("0" + secs).slice(-2)
         
    } else {
        document.getElementById("timer").innerHTML = "Похоже время истекло :)"
    }
    setTimeout(timer, 1000)

}

timer()