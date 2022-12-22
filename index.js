const hourHand = document.querySelector('[data-hourHand]'); //selecting all hands
const minuteHand = document.querySelector('[data-minuteHand]');
const secondHand = document.querySelector('[data-secondHand]');

setInterval(setClock, 1000); 

function setClock() {
    var date = new Date();
    var secondRatio = date.getSeconds()/60;
    var minuteRatio = date.getMinutes()/60;
    var hourRatio = date.getHours()/12;
    hourHand.style.setProperty('--rotation', hourRatio * 360);
    minuteHand.style.setProperty('--rotation', minuteRatio * 360);
    secondHand.style.setProperty('--rotation', (secondRatio + minuteRatio/12) * 360);
}

setClock();