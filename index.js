
var randomNumber1 = Math.floor(Math.random()*6+1);
var dicePathway1 ="images/dice" + randomNumber1 +".png";

var randomNumber2 = Math.floor(Math.random()*6+1);
var dicePathway2 ="images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[0].setAttribute("src", dicePathway1);
document.querySelectorAll("img")[1].setAttribute("src", dicePathway2);

if (randomNumber1 > randomNumber2)
{ document.querySelector("h1").innerHTML="🚩Player 1 Wins!"; }
else if (randomNumber2 > randomNumber1)
{ document.querySelector("h1").innerHTML="Player 2 Wins!🚩"; }
else
{ document.querySelector("h1").innerHTML="It's a Draw!"; }
