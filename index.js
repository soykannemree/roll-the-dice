

function rollDiceFunction(){
    
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomDice1 = "dice"+randomNumber1+".png";
    var count1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomDice2 = "dice"+randomNumber2+".png";
    var count2;
 
    document.querySelector(".dice-first img").setAttribute("src","assets/image/"+randomDice1);
    document.querySelector(".dice-second img").setAttribute("src","assets/image/"+randomDice2);
    
    
    if(randomNumber1===randomNumber2){
        document.querySelector(".score-first h3").innerHTML="Draw";
        document.querySelector(".score-second h3").innerHTML="Draw";
    }
    else if(randomNumber1>randomNumber2){
        document.querySelector(".score-first h3").innerHTML="You won!";
        document.querySelector(".score-second h3").innerHTML="You lose!";
        count1++;
    }
    else{
        document.querySelector(".score-first h3").innerHTML="You lose!";
        document.querySelector(".score-second h3").innerHTML="You won!";
        count2++;
    }

}