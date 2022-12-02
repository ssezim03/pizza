var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}

// today = mm+'-'+dd+'-'+yyyy;
// today = dd+'-'+mm+'-'+yyyy;
// today = yyyy+'-'+mm+'-'+dd;

today = yyyy+'-'+mm+'-'+dd;
document.getElementById('dateNow').innerHTML = today;



// текущее время и текущий уникс тайм

timer();
function timer(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (sec < 10){
        sec = "0" + sec
    }
    var t_str = hours + ":" + minutes + ":" + sec + " ";

    document.getElementById('time_span').innerHTML = t_str;

    setTimeout(timer);
}