var hours,minutes,seconds;

function timer()
{
    if(localStorage.getItem("curentHour") != null)
    {
        load();
    }
    else
    {
        hours = Math.floor(Math.random()*3 +1);
        minutes =  Math.floor(Math.random()*60);
        seconds =  Math.floor(Math.random()*60);
        localStorage.setItem("curentHour", hours);
        localStorage.setItem("curentMinutes", minutes);
        localStorage.setItem("curentSeconds", seconds);
        if(hours < 10)
        {
            hours = "0" + hours;
        }
        if(minutes < 10)
        {
            minutes = "0" + minutes;
        }
        if(seconds < 10)
        {
            seconds = "0" + seconds;
        }
        document.getElementById("hour").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}
setInterval(timerCountDown, 1000);
function save()
{
    localStorage.setItem("curentHour", hours);
    localStorage.setItem("curentMinutes", minutes);
    localStorage.setItem("curentSeconds", seconds);
}
function load()
{

    hours =parseFloat(localStorage.getItem("curentHour"));
    minutes = parseFloat(localStorage.getItem("curentMinutes"));
    seconds = parseFloat(localStorage.getItem("curentSeconds"));
   if(hours < 10)
   {
       hours = "0" + hours;
   }
   if(minutes < 10)
   {
       minutes = "0" + minutes;
   }
   if(seconds < 10)
   {
       seconds = "0" + seconds;
   }
   document.getElementById("hour").innerText = hours;
   document.getElementById("minutes").innerText =  minutes;
   document.getElementById("seconds").innerText = seconds;
}
function timerCountDown()
{
    var currentTimeRemaining =  document.getElementById("hour").innerText +  document.getElementById("minutes").innerText +  document.getElementById("seconds").innerText;
    if( currentTimeRemaining != 0)
    {
        if(document.getElementById("seconds").innerText > 0)
        {
            document.getElementById("seconds").innerText -= 1;
            if(document.getElementById("seconds").innerText < 10)
    
            {
                document.getElementById("seconds").innerText = "0" + document.getElementById("seconds").innerText;
            }
           
        }
        if(document.getElementById("seconds").innerText <= 0)
        {
            if(document.getElementById("minutes").innerText > 0)
            {
                document.getElementById("minutes").innerText -= 1;
                if( document.getElementById("minutes").innerText < 10)
                {
                    document.getElementById("minutes").innerText = "0" +  document.getElementById("minutes").innerText;
                }
                document.getElementById("seconds").innerText = 60;
            }
        }
        if(document.getElementById("seconds").innerText <= 0 && document.getElementById("minutes").innerText <= 0 && document.getElementById("hour").innerText >0)
        {
            document.getElementById("hour").innerText -= 1;
            document.getElementById("hour").innerText = "0" + document.getElementById("hour").innerText;
            document.getElementById("minutes").innerText = 60;
        }
        hours = document.getElementById("hour").innerText;
        minutes =  document.getElementById("minutes").innerText;
        seconds =  document.getElementById("seconds").innerText;
        save();
    }
    
}
var response = "show";
var currentId;
function setResponse(i)
{
    if(currentId != i && currentId!=null)
    {
        document.getElementsByClassName("questionButtons")[currentId].style.backgroundColor = "white";
        document.getElementsByClassName("questionTd")[currentId].style.color =  "white";
        document.getElementsByClassName("responseTr")[currentId].style.display = "none";
        document.getElementsByClassName("questionButtons")[currentId].style.transform =  "rotate(0deg)";
         
            response = "show";
    }
    currentId = i;
    if(response == "show")
    {
        document.getElementsByClassName("questionButtons")[i].style.transform =  "rotate(180deg)";
        document.getElementsByClassName("questionButtons")[i].style.backgroundColor = "#35df0f";
        document.getElementsByClassName("questionTd")[i].style.color =  "#35df0f";
        document.getElementsByClassName("responseTr")[i].style.display = "block";
               document.getElementsByClassName("responseTr")[i].classList.add("show"); 
        response = "hidden";
        return;
    }
    if(response == "hidden")
    {
        document.getElementsByClassName("questionButtons")[i].style.backgroundColor = "white";
        document.getElementsByClassName("questionButtons")[i].style.transform =  "rotate(0deg)";
        document.getElementsByClassName("questionTd")[i].style.color =  "white";
        document.getElementsByClassName("responseTr")[i].style.display = "none";
         
            response = "show";
        
    
          
    }
}