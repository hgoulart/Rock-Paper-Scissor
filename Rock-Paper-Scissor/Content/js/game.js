
var playerOneMove;
var playerTwoMove;
var gameMode;

function playerSelect(element)
{
    var bgPlayer = document.querySelectorAll('.select-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.color = "black";
        bgPlayer[i].style.fontWeight = "normal";
    }

    element.style.color = 'red';
    element.style.fontWeight = '900';
    gameMode = element.id;
    console.log(gameMode);
}

function playerOne (element)
{
    if(gameMode == undefined){
        alert("escolha um modo de jogo");
    }
    else if(gameMode == 0){

        var bgPlayer = document.querySelectorAll('.first-player');

        for(var i = 0; i < bgPlayer.length; i++)
        {
            bgPlayer[i].style.opacity = '0.8';
        }
    
        element.style.opacity = '1';
    
        playerOneMove = element.innerHTML;
    
        console.log(playerOneMove);

    }else if(gameMode == 1){
        playerOneMove = element.innerHTML;

        var classSelected = document.getElementById('boxOne');
        classSelected.classList.remove("select");
        classSelected.classList.remove("scissor");
        classSelected.classList.remove("rock");
        classSelected.classList.remove("paper");
        classSelected.classList.add(playerOneMove);

        console.log(playerOneMove);

        var bgPlayer = document.querySelectorAll('.first-player');

        for(var i = 0; i < bgPlayer.length; i++)
        {
            bgPlayer[i].style.opacity = '0.8';
        }
    
        element.style.opacity = '1';
        
    
        var randNumber = Math.floor((Math.random() * 3) + 1);

        var classSelected = document.getElementById('boxTwo');
        classSelected.classList.remove("select");
        classSelected.classList.remove("scissor");
        classSelected.classList.remove("rock");
        classSelected.classList.remove("paper");


        if(randNumber == 1){
            playerTwoMove = 'rock';
        }else if(randNumber == 2){
            playerTwoMove = 'paper';
        }else{
            playerTwoMove = 'scissor';
            
        }
        console.log(playerTwoMove);
        classSelected.classList.add(playerTwoMove);
        setTimeout(function(){
            update ();
            
        }, 500)
    }else{

    }

}

function playerTwo (element)
{
    var bgPlayer = document.querySelectorAll('.second-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.opacity = '0.8';
    }

    element.style.opacity = '1';

    playerTwoMove = element.innerHTML;
    console.log(playerTwoMove);

    setTimeout(function(){
        if(playerOneMove !== undefined){
            update ();
        }else{
            alert("Player 1 deve escolher!");
        }
        
    }, 500);

}

function update ()
{
    console.log('update');
    if(playerOneMove === playerTwoMove){
        alert('Empate');
    }else{
        if(playerOneMove === "rock"){
            if(playerTwoMove === "paper" ){
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p2").appendChild(node);
                alert(playerOneMove+" vs "+ playerTwoMove+" - Player 2 Wins");
            }else{
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p1").appendChild(node);
                alert(playerOneMove+" vs "+ playerTwoMove+" - Player 1 Wins");
            }
        }else if(playerOneMove === "paper"){
            if(playerTwoMove === "rock" ){
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p1").appendChild(node);
                alert(playerOneMove+" vs "+ playerTwoMove+" - Player 1 Wins");
            }else{
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p2").appendChild(node);
                alert(playerOneMove+" vs "+ playerTwoMove+" - Player 2 Wins");
            }
        }else{
            if(playerTwoMove === "rock" ){
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p2").appendChild(node);
                alert(playerOneMove+" vs "+ playerTwoMove+" - Player 2 Wins");
            }else{
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p1").appendChild(node);
                alert(playerOneMove+" vs "+ playerTwoMove+" - Player 1 Wins");
            }
        }
        console.log('dif');
    }
}

