
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

    if(gameMode == 1){
        document.querySelector('.p1').innerHTML = 'Score: Player';
        document.querySelector('.p2').innerHTML = 'Score: Computer';
    }else{
        document.querySelector('.p1').innerHTML = 'Score: Computer';
        document.querySelector('.p2').innerHTML = 'Score: Computer';
    }

}

function playerOne (element)
{
    if(gameMode == undefined){
        var message = "Choose a game mode first.";
        showModal(message);
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

    setTimeout(function(){
        if(playerOneMove !== undefined){
            update ();
        }else{
            if(gameMode == undefined){
                var message = "Choose a game mode first.";
                showModal(message);
            }else{
                var message = "Player 1 must choose first!";
                showModal(message);
            }

        }
        
    }, 500);

}

function update ()
{
    if(playerOneMove === playerTwoMove){
        var message = 'Draw';
        showModal(message);
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
                var message = playerOneMove+" vs "+ playerTwoMove+" - Player 2 Wins";
                showModal(message);
            }else{
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p1").appendChild(node);
                var message = playerOneMove+" vs "+ playerTwoMove+" - Player 1 Wins";
                showModal(message);
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
                var message = playerOneMove+" vs "+ playerTwoMove+" - Player 1 Wins";
                showModal(message);
            }else{
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p2").appendChild(node);
                var message = playerOneMove+" vs "+ playerTwoMove+" - Player 2 Wins";
                showModal(message);
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
                var message = playerOneMove+" vs "+ playerTwoMove+" - Player 2 Wins";
                showModal(message);
            }else{
                var node = document.createElement("LI");
                var img = document.createElement("IMG");
                img.src = 'Content/images/start.png';
                img.setAttribute('width', '20px');
                img.setAttribute('height', '20px');
                node.appendChild(img);
                document.getElementById("score-p1").appendChild(node);
                var message = playerOneMove+" vs "+ playerTwoMove+" - Player 1 Wins";
                showModal(message);
            }
        }
        console.log('dif');
    }
}
function closeModal(){
    var modal = document.getElementById('modal');
    modal.classList.add("hide");
    setTimeout(function(){
        modal.style.display = "none";
    }, 500);
    
}
function showModal(message){
    var text = document.querySelector('.text-result');
    text.innerHTML = message;
    var modal = document.getElementById('modal');
    modal.style.display = "block";
    setTimeout(function(){
        modal.classList.remove("hide");
        
    }, 500);
    
}
function clearStars(){

    location.reload(); 

}
