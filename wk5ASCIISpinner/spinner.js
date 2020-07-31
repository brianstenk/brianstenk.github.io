let timer = null;
function startAnimation(){
    const symbol = ["-","\","/","-"];
    index = 0;
    function Animator(){
        if(index === 0){
            document.getElementById("spinner").innerHTML = symbol[index];
            index++;
        }

        else if(index === symbol.length-1){
            document.getElementById("spinner").innerHTML = symbol[index];
            index = 0;
        }
        else {
            document.getElementById("spinner").innerHTML = symbol[index];
            index++;
        }
    }

    if(timer === null ){
        timer = setInterval(show(), 250);
    }
  
  }

  function showAnimation(){
      document.getElementById("texArea").value = symbol;

  }

window.onload = function loading(){
    document.getElementById("spinner").innerHTML = "#Loading";
    startAnimation();

}

function hide(){
    document.getElementById("spinner").innerHTML = "";
    if (timer !== null){
        clearInterval(timer);
        timer = null;
    }
}