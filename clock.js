const clockBase = document.querySelector(".js-clock"),
//js-clock이라는 class를 찾아주는 변수
//querySelector은 element의 자식을 탐색함. 이 경우는 clock class자식을 탐색하고싶은 것.
clockTitle = document.querySelector(".js-title");
/*만약에 class가 아니라 h1값으로 동작하고싶다면
clockTitle = clockBase.querySelector("h1");*/


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}`: seconds}`; 
    
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();

