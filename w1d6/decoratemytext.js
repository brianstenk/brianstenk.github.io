window.onload = function(){
    "use strict";
    // put all of your code here
const btnEvents=document.getElementById("btn");
const chkEvents=document.getElementById("chkbling");

btnEvents.onclick=fontByTime;
chkEvents.onchange=boldit;

// function fontSize(){
// document.getElementById("tarea").style.fontSize="24pt";
//   }

function fontSizeby2(){
var fsize=document.getElementById("tarea").style.fontSize;
     fsize=parseInt(fsize)+2;
     document.getElementById("tarea").style.fontSize=fsize+"pt";
}

function boldit(){
    document.body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";

    if(document.getElementById("chkbling").checked){
    document.getElementById("tarea").style.fontWeight="bold";
    txtcolor();

    }
    else{
      document.getElementById("tarea").style.fontWeight="normal";
      normalise();

    }
  }
//txtcolor ...chkbling
  function txtcolor(){
     var txtformat=document.getElementById("tarea");
     txtformat.style.color="green";
     txtformat.style.textDecoration ="underline";
}

function normalise(){
  var txtformat=document.getElementById("tarea");
  txtformat.style.color="black";
  txtformat.style.textDecoration ="none";
}

function fontByTime(){
  //setTimeInterval(fontSizeby2,2000);
  setTimeout(fontSizeby2,2000);
}
};
