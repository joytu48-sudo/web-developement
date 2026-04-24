function myFunction() {
    let time = new Date().getHours();
    let greeting;

    if (time < 12) {
        greeting = "good morning"
    }

    else if (time < 16) {
        greeting = "good afternoon"
    }

    else if (time < 21) {
        greeting = "good evening"
    }

    else {
        greeting = "good night"
    }

    document.getElementById("time").innerHTML = "The time is " + time;
    document.getElementById("greeting").innerHTML = greeting;
}