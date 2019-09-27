var playerTwoHandNum 
var playerTwoHand 
var yourScore = 0;
var playerScore = 0;

function randGen(){
    document.getElementsByTagName("h1")[0].innerHTML="";
    document.getElementsByTagName("h1")[1].innerHTML="";
    document.getElementsByTagName("h1")[2].innerHTML="";
    document.getElementsByTagName("h1")[3].innerHTML="";

playerTwoHandNum =  Math.random(1);
if (playerTwoHandNum <= .33333){
    playerTwoHand = "rock";
} else if(playerTwoHandNum <= .66666){
    playerTwoHand = "paper"
}else{
    playerTwoHand = "scissors"
}
console.log(playerTwoHandNum);
document.getElementsByTagName("h1")[0].append("your enemy picked "+ playerTwoHand)
}

function hitRock(){
if (playerTwoHand === "rock"){
    document.getElementsByTagName("h1")[1].append("You Picked Rock and You Tied!")
}else if(playerTwoHand === "paper"){
    document.getElementsByTagName("h1")[1].append("You Picked Rock and You Lose!")
    playerScore+=1;
}else{
    document.getElementsByTagName("h1")[1].append("You Picked Rock and You Win!")
    yourScore+=1;
}
document.getElementsByTagName("h1")[2].innerHTML="Your score is " + yourScore;
document.getElementsByTagName("h1")[3].innerHTML="Your enemy score is " + playerScore;
}

function hitPaper(){
    if (playerTwoHand === "rock"){
        document.getElementsByTagName("h1")[1].append("You Picked Paper and You Won!")
        yourScore+=1;
    }else if(playerTwoHand === "paper"){
        document.getElementsByTagName("h1")[1].append("You Picked Paper and You Tied!")
    }else{
        document.getElementsByTagName("h1")[1].append("You Picked Paper and You lose!")
        playerScore+=1;
    }
    document.getElementsByTagName("h1")[2].innerHTML="Your score is " + yourScore;
    document.getElementsByTagName("h1")[3].innerHTML="Your enemy score is " + playerScore;
    }

    function hitScissors(){
        if (playerTwoHand === "rock"){
            document.getElementsByTagName("h1")[1].append("You Picked Scissors and You Lost!")
            playerScore+=1;
        }else if(playerTwoHand === "paper"){
            document.getElementsByTagName("h1")[1].append("You Picked Scissors and You Won!")
            yourScore+=1;
        }else{
            document.getElementsByTagName("h1")[1].append("You Picked Scissors and You Tied!")
        }
        document.getElementsByTagName("h1")[2].innerHTML="Your score is " + yourScore;
        document.getElementsByTagName("h1")[3].innerHTML="Your enemy score is " + playerScore;
        }