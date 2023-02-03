function time(){
    var sec = 0;
    var timer = setInterval(function(){
        console.log(sec);
        sec++;
        if (sec > 10) {
            clearInterval(timer);
        }
    }, 1000);
}
time();

//setInterval is used to repeat same code after given interval.
