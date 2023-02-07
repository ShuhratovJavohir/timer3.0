const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

let timerInterval;
let timer = 3600;
localStorage.setItem('data', timer);

let row = localStorage.getItem('data')
let dataTime = JSON.parse(row)

function updateTime() {
  dataTime--;
  let mins = parseInt(dataTime / 60);
  let secs = dataTime % 60;
  
  if(mins < 10) {
    mins = '0' + String(mins);
  }
  if(secs < 10) {
    secs = '0' + String(secs);
}
localStorage.setItem('currentTime', dataTime);
document.querySelector('#timespan').innerHTML = `${mins}:${secs}`;
    if(dataTime == 0){
      dataTime = 3600;
    }
}

// start.addEventListener('click', function(){
//   timerInterval = setInterval(updateTime, 10);
// })
// stop.addEventListener('click', function(){
//   clearInterval(timerInterval);
// })


function startTimer() {
  timerInterval = setInterval(updateTime, 10);
};

function stopTimer() {
  clearInterval(timerInterval);
}

window.addEventListener('load', () => {  
  dataTime = parseInt(localStorage.getItem('currentTime'));
  if(isNaN(dataTime)) dataTime = 0
  startTimer()
}, false );
