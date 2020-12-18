
var startGame = document.querySelector("#start");
startGame.addEventListener("click", roll);

function roll(){
    var player1 = document.querySelector("#player1");
    var player2 = document.querySelector("#player2");
    var flag = document.querySelector("#flag");
    
    var draw = "Draw";
    var p1Wins = "Player 1 Wins!";
    var p2Wins = "Player 2 Wins!";
    
    var diceNum1 = Math.floor(Math.random()*6)+1;
    var diceNum2 = Math.floor(Math.random()*6)+1;

    player1.innerHTML = "<img src = 'images/"+diceNum1 + ".gif' />";
    player2.innerHTML = "<img src = 'images/"+diceNum2 + ".gif' />";

    if(diceNum1 == diceNum2)
    {flag.innerHTML = draw;}

    if(diceNum1 > diceNum2)
    {flag.innerHTML = p1Wins;}

    if(diceNum1 < diceNum2)
    {flag.innerHTML = p2Wins;} 
}
