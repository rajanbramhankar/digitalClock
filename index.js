function time()

{

    var hours = document.getElementById("hours")
    var minutes = document.getElementById("minutes")
    var seconds = document.getElementById("seconds")
    var ampm = document.getElementById("ampm")


    var time = new Date()

    var hrs = time.getHours()
    var mins = time.getMinutes()
    var secs = time.getSeconds()
    var am_pm = "AM"

    if (hrs == 0) {

        hrs = 12 //11:59AM -->00:00 _-->12:00
    }
    if (hrs > 12) {

        hrs = hrs - 12;
        am_pm = "PM"


    } //24 hrs format into 12hrs format

    if (hrs < 10) {

        hrs = "0" + hrs
    }
    if (mins < 10) {

        mins = "0" + mins
    }

    if (secs < 10) {

        secs = "0" + secs
    }

    hours.innerText = hrs
    minutes.innerText = mins
    seconds.innerText = secs
    ampm.innerText = am_pm

}

var oneseconds = 1000

setInterval(time, oneseconds)


function setTime() {


    var x = document.getElementById("morning").value
    var y = document.getElementById("afternoon").value
    var z = document.getElementById("evening").value
    var n = document.getElementById("night").value
    let p = document.getElementById("yup")
    
    var hourr = new Date().getHours();
    
    
    if (x == hourr) {
        
        
        document.getElementById("bigcontainer").innerText = "Good Morning"
        
        document.getElementById("smallcontainer").innerText = "Lets have some breakfast"
        
        document.getElementById("cImg").src = "./Component 30 – 1.svg"
        
        
    }
    if (y == hourr) {
        

        document.getElementById("bigcontainer").innerText = "Good Afternoon !! Take some lunch"

        document.getElementById("smallcontainer").innerText = "LETS HAVE SOME LUNCH !!"

        p.src = "Component 31 – 1.svg"



    }
    if (z == hourr) {

        document.getElementById("bigcontainer").innerText = "Good Evening !!"

        document.getElementById("smallcontainer").innerText = "STOP YAWNING, GET SOME TEA !! IT'S JUST EVENINGr"

        p.src = "evening.jpg.png"
        
    }
    
    if (n == hourr) {
        
        document.getElementById("bigcontainer").innerText = "Good Night !!"
        
        document.getElementById("smallcontainer").innerText = "CLOSE YOUR EYE'S AND GO TO SLEEP !!"
        
        p.src = "./Component 32 – 1.svg"
    }

        
    let ones =document.getElementById("WakeT");
    ones.innerText = morning.options[morning.selectedIndex].text;

    let twos =document.getElementById("LunchT");
    twos.innerText = afternoon.options[afternoon.selectedIndex].text;
    
    let threes = document.getElementById('NapT');
    threes.innerText =evening.options[evening.selectedIndex].text;

    let fours = document.getElementById("NightT");
    fours.innerText = night.options[night.selectedIndex].text;


}
