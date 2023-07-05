const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggle.addEventListener('click',(e)=>{
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    if(toggle.innerHTML === 'Dark Mode'){
        toggle.innerHTML = 'Light Mode';
    }
    else{
        toggle.innerHTML = 'Dark Mode';
    }
})

const scale = (num,in_min,in_max,out_min,out_max) => {

    return (num-in_min) * (out_max-out_min) / (in_max-in_min) + out_min;

}

function setTime(){
    const time  =new Date();
    const month = time.getMonth();
    const day  = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const mins = time.getMinutes();
    const sec = time.getSeconds();
    const ampm = hours > 12 ? 'PM' : 'AM';


    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;

    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(mins,0,59,0,360)}deg)`;

    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(sec,0,59,0,360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${mins <10? `0${mins}` : mins} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]},<span class="circle">${date}</span>`

}
setTime();

setInterval(setTime,1000);

