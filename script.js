var timer;
timer = {
    minutes: undefined,
    seconds: undefined
}


function timeLeft() {
    var day = new Date(2021, 9, 6, 13, 11, 34, 3);
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

    dayRus = 'monday'; //testing string for when it's weekends

    if (hours >= 8 && hours <= 15 && dayRus !== 'среда' && dayRus !== 'пятница' || hours >= 8 && hours <= 14 && dayRus === 'среда' && dayRus === 'пятница') {
        const segments = [
            [510, 555],
            [565, 610],
            [620, 665],
            [685, 730],
            [750, 795],
            [805, 850],
            [860, 905],
        ];

        const findSegment = query => {
            const [h, m] = query.split(':');
            const now = h * 60 + +m;

            return segments.findIndex(([start, end]) =>
                now >= start &&
                now <= end
            );
        }

        const segment = findSegment('13:11'); //=> 4
    }

    if (isWeekend === false || isWeekend === true) {
        document.getElementById('text1').innerHTML = dayRus;
        document.getElementById('text2').innerHTML = hours + ':' + minutes;
        // let seconds = day.getSeconds();
        // document.getElementById('text4').innerHTML = seconds; //sec test
        document.getElementById('minspan').innerHTML = '12'
        document.getElementById('secspan').innerHTML = '44'
    }
}

timeLeft();

setInterval(function () {
    //this code runs every second
    timeLeft();
}, 500);

