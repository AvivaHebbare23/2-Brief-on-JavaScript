function wish() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good Morning!";
    }
    else if (time < 20) {
        greeting = "Good afternoon!";
    }
    else {
        greeting = "Good evening!";
    }

    document.getElementById("hour").innerHTML = "Current time is: " + time;
    document.getElementById("greet").innerHTML = greeting;
}

var a = 5
document.write(typeof(a)+"<br>")
var b = 'five'
document.write(typeof (b) + "<br>")
var c = {"animal":"cat"};
document.write(typeof (c) + "<br>")
var d = false;
document.write(typeof (d) + "<br>")
var e;
document.write(typeof (e) + "<hr>")

var i = 0;
while (i<5)
    {
        var num = Math.round(Math.random()*200);
        document.write(num+"<br>");
        i=i+1;
    }
document.write("<hr>")

var i = 10;
while (i >= 0) {
    document.write(i + "<br>");
    i = i - 1;
}
