function showTime()
{
    var sT = new Date();
    var h = sT.getHours();
    var m = sT.getMinutes();
    var s = sT.getSeconds();
    var mer = "AM";
    
    if(h>=12){
        mer = "PM";
    }
        if(h == 0){
            h = 12;
        }
    if(h >=12){
        h = h-12;
    }
    if(h<=10){
        h= "0" +h;
    }
    if(m<=10){
        m= "0" +m;
    }
    if(s<=10){
        s= "0" +s;
    }
    var time = h+":"+m+":"+s;
    document.getElementById("main").innerText = time+ mer;
    setTimeout(showTime,1000);
}
 showTime(); 
function showAlsoDay(){
    var day = new Date();
    var showDay = day.toDateString();
    document.getElementById("day").innerText = showDay;
}
showAlsoDay();