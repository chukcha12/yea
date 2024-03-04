var player = "0";
var won = false;

function clickBox(box){
    if(box.innerText != "" || won ) return;
    box.innerText = player;

    // if(player == "0"){
    //     player = "x";
    // }
    // else{
    //     player = "0";
    // }
    player == "0" ? player = "x" : player = "0";

    checkGame();
}
function checkGame(){
    for (var i = 0; i <=2; i++) {
     
     var first = document.getElementById(i + "_0").innerText;
     var second = document.getElementById(i + "_1").innerText;
     var third = document.getElementById(i + "_2").innerText;
     if(first == "") continue;

     if(first == second && first == third){
        alert("winner");
        won = true;
       }
    }

    var firstD1 = document.getElementById("0_0").innerText;
     var secondD1 = document.getElementById("1_1").innerText;
     var thirdD1 = document.getElementById("2_2").innerText;

     if (secondD1 !="" && firstD1 == secondD1 && firstD1 == thirdD1){
        alert("winner")
        won = true;
     }
     var firstD2 = document.getElementById("0_2").innerText;
     var secondD2 = document.getElementById("1_1").innerText;
     var thirdD2 = document.getElementById("2_0").innerText;

     if (secondD2 !="" && firstD2 == secondD2 && 2 == thirdD1){
        alert("winner");
        won = true;
     }
     
}
function Reload(){
    location.reload();
}
