let actualDays = document.getElementById('days')
let actualHours = document.getElementById('hours')
let actualMinutes = document.getElementById('minutes')
let actualSeconds = document.getElementById('seconds')
let year = document.getElementById('year')

let countDown = () =>{
    let currentDate = new Date();

    let nextYear = currentDate.getFullYear() + 1 
    let futureDate = new Date(`1 Jan ${nextYear} 00:00:00`)
    console.log(futureDate)
    let actualDate = futureDate - currentDate;
    // console.log(actualDate)

    let days = Math.floor(actualDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(actualDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(actualDate / 1000 / 60) % 60;
    let seconds = Math.floor(actualDate / 1000) % 60;
    
    // console.log(`${days} : ${hours} : ${minutes} : ${seconds}`)

   
   days = String(days).padStart(2,'0');
   hours = String(hours).padStart(2,'0');
   minutes = String(minutes).padStart(2,'0');
   seconds = String(seconds).padStart(2,'0');


    year.innerHTML = nextYear;
    actualDays.innerHTML = days;
    actualHours.innerHTML = hours;
    actualMinutes.innerHTML = minutes;
    actualSeconds.innerHTML = seconds;
}
countDown()
setInterval(countDown,  1000)