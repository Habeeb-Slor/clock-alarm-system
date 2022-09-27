const myAudio = new Audio('Xiaomi.mp3')

let myDisplay = document.getElementById('showTime');
let realTime = new Date()
let realMinute = realTime.getMinutes()
let realSeconds = realTime.getSeconds()
// let myAudio = Audio('mixkit-short-rooster-crowing-2470.mp3')
// myAudio.loop = ture;
const myClock = ()=>{
  const newTime = new Date()

  const myHour = timeFormat(newTime.getHours());
  const myMinute = timeFormat(newTime.getMinutes());
  const mySecond = timeFormat(newTime.getSeconds());

  myDisplay.innerText = `${myHour} : ${myMinute} : ${mySecond}`
}
const timeFormat = (time)=>{
  if(time < 10){
    return '0' + time;
  }
  return time;
}
setInterval(myClock,1000)

const setAlarm = ()=>{
 let timer = new Date()
 let timerHour = myHour.value
 let timerMin = myMin.value

  if(timerHour == timer.getHours() && timerMin == timer.getMinutes()){
    myAudio.play()
    // alert('Answer this question')
    // setInterval(myAudio,1000)
  }
  setInterval("setAlarm()",1000)

}
const clearAlarm = ()=>{
  let randomNum = Math.ceil(Math.random()*10000000000000)
  let waker = prompt(randomNum,'Type The Number Above In')
  
  if(waker == randomNum){
    location.reload()
  
  }

}
