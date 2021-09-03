var day = new Date();
var isWeekend;
var dayRus;
// alert('today is ' + day.getHours());
var weekDay = day.getDay();
var hours = day.getHours();
var minutes = day.getMinutes();

switch (weekDay) {
    case 0:
        //sunday
        isWeekend = true
        break;
    case 1:
        //monday
        isWeekend = false;
        dayRus = 'понедельник';
        break;
    case 2:
        //tuesday
        isWeekend = false;
        dayRus = 'вторник';
        break;
    case 3:
        //wednesday
        isWeekend = false;
        dayRus = 'среда';
        break;
    case 4:
        //thursday
        isWeekend = false;
        dayRus = 'четверг';
        break;
    case 5:
        //friday
        isWeekend = false;
        dayRus = 'пятница';
        break;
    case 6:
        //saturday
        isWeekend = true;
        break;
}

if (isWeekend === false) {
    
    document.getElementById('text1').innerHTML = dayRus;
    document.getElementById('text2').innerHTML = hours + ':';
    document.getElementById('text3').innerHTML = minutes;
}

