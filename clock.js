const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secontEl = document.querySelector('.second')

function updateClock() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const interval = 360 / 60;

  const hourDeg = hour * 30 + minute / 2;
  const minuteDeg = minute * interval + second / 10;
  const secondDeg = second * interval;


  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secontEl.style.transform = `rotate(${secondDeg}deg)`;

  console.log(hourDeg);

}
setInterval(updateClock, 1000);