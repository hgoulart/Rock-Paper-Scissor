var playerOneMove;
var playerTwoMove;
var gameMode;
var checkPlayer = true;

function playerSelect (element){

    if(checkPlayer){
        
        checkPlayer = false;

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



}

function playerOne (element){

    if(gameMode == undefined){
        var message = "Choose a game mode first.";
        showModal(message);
    }
    else if(gameMode == 0){

        var bgPlayer = document.querySelectorAll('.first-player');

        for(var i = 0; i < bgPlayer.length; i++){
            bgPlayer[i].style.opacity = '0.8';
        }
        element.style.opacity = '1';
        playerOneMove = element.innerHTML;

    }else if(gameMode == 1){
        computer2(element);
    }
}

function playerTwo (element){

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
    }, 200);

}
function createStar(){

    var node = document.createElement("LI");
    var img = document.createElement("IMG");
    img.src = 'Content/images/start.png';
    img.setAttribute('width', '5px');
    img.setAttribute('height', '5px');
    node.appendChild(img);
    node.classList.add("stars");

    setTimeout(function(){
        img.classList.add("anime");
    },400);

    return node;
}
function update (){

    var node = createStar();

    if(playerOneMove === playerTwoMove){
        var message = 'Draw';
        showModal(message);
    }else{
        if(playerOneMove === "rock"){
            if(playerTwoMove === "paper" ){

                document.getElementById("score-p2").appendChild(node);

                var message = "Player 2 Wins";
                showModal(message);
            }else{

                document.getElementById("score-p1").appendChild(node);

                var message = "Player 1 Wins";
                showModal(message);
            }
        }else if(playerOneMove === "paper"){
            if(playerTwoMove === "rock" ){

                document.getElementById("score-p1").appendChild(node);
 
                var message = "Player 1 Wins";
                showModal(message);
            }else{
 
                document.getElementById("score-p2").appendChild(node);

                var message = "Player 2 Wins";
                showModal(message);
            }
        }else{
            if(playerTwoMove === "rock" ){

                document.getElementById("score-p2").appendChild(node);
  
                var message = "Player 2 Wins";
                showModal(message);
            }else{

                document.getElementById("score-p1").appendChild(node);
 
                var message = "Player 1 Wins";
                showModal(message);
            }
        }
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
    }, 300);
}
function clearGame(){
    checkPlayer = true;

    document.querySelector('.p1').innerHTML = 'Score:';
    document.querySelector('.p2').innerHTML = 'Score:';

    var bgPlayer = document.querySelectorAll('.select-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.color = "black";
        bgPlayer[i].style.fontWeight = "normal";
    }

    var classSelected = document.getElementById('boxOne');
    classSelected.classList.remove("select", "scissor","rock","paper");
    classSelected.classList.add('select');

    var bgPlayer = document.querySelectorAll('.first-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.opacity = '0.8';
    }

    var classSelected = document.getElementById('boxTwo');
    classSelected.classList.remove("select", "scissor","rock","paper");
    classSelected.classList.add('select');

    var bgPlayer = document.querySelectorAll('.second-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.opacity = '0.8';
    }

    var removeStars = document.querySelectorAll('.stars');

    for(var i = 0; i < removeStars.length; i++)
    {
        removeStars[i].remove();
    }
    
}

function computer2(element){

    playerOneMove = element.innerHTML;

    var classSelected = document.getElementById('boxOne');
    classSelected.classList.remove("select", "scissor","rock","paper");
    classSelected.classList.add(playerOneMove);

    var bgPlayer = document.querySelectorAll('.first-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.opacity = '0.8';
    }

    element.style.opacity = '1';
    var randNumber = Math.floor((Math.random() * 3) + 1);

    var classSelected = document.getElementById('boxTwo');
    classSelected.classList.remove("select", "scissor","rock","paper");
    
    if(randNumber == 1){
        playerTwoMove = 'rock';
    }else if(randNumber == 2){
        playerTwoMove = 'paper';
    }else{
        playerTwoMove = 'scissor';
    }
    classSelected.classList.add(playerTwoMove);
    setTimeout(function(){
        update ();
    }, 500)
}
