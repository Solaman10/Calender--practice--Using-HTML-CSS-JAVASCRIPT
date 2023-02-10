function displayTime() { 

    let dateTime = new Date();
    let hr = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();
    let date = dateTime.getDate();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();
    let day = dateTime.getDay();
    let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    let days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
    if(hr>12)
    {
        document.getElementById('ampm').innerHTML = 'PM';
        hr = hr - 12;
    }
    else
    {
        document.getElementById('ampm').innerHTML = 'AM';
    }

    document.getElementById('hr').innerHTML = padZero(hr);
    document.getElementById('mins').innerHTML = padZero(mins);
    document.getElementById('secs').innerHTML = padZero(secs);
    document.getElementById('date').innerHTML = padZero(date);
    document.getElementById('month').innerHTML = months[month];
    document.getElementById('year').innerHTML = year;

    document.getElementById('day').innerHTML = days[day-1]+`DAY`;
}

function padZero(num) {

    return num<10?"0"+num:num;
}

setInterval(displayTime,500);