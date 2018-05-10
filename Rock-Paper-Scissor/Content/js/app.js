var playerOneMove;//defines the choice os player one
var playerTwoMove;//defines the choice os player two
var gameMode;//verify if game mode is player/cp or cp/cp
var checkPlayer = true;//if has already selected a player
var choices = ['rock', 'paper', 'scissor', 'spock', 'lizard'];//array of all game choices

//selects game mode
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
            document.querySelector('.btn-success').style.display = 'none';
        }else{
            document.querySelector('.p1').innerHTML = 'Score: Computer';
            document.querySelector('.p2').innerHTML = 'Score: Computer';
            document.querySelector('.btn-success').style.display = 'block';
            gameTimer();
            
        }
    }
}

function playerOne (element){

    if(gameMode == undefined){
        var message = "Choose a game mode first.";
        showModal(message);
    }
    else {

        gameTimer(element);

    }
}

function computer1 (){
    if(gameMode == 2){
        var randNumber = Math.floor((Math.random() * choices.length) + 0);
        playerOneMove = choices[randNumber];
    
        var bgPlayer = document.querySelectorAll('.first-player');
    
        for(var i = 0; i < bgPlayer.length; i++){
            bgPlayer[i].style.opacity = '0.8';
            if(bgPlayer[i].classList.contains(playerOneMove)){
                bgPlayer[i].style.opacity = '1';
                bgPlayer[i].classList.add('fadeIn');
                var item = bgPlayer[i];
            }
        }
       
        var element = document.getElementById('boxOne');
        element.style.opacity = '1';
        element.innerHTML = playerOneMove;
        element.classList.remove('select');
        element.classList.add(playerOneMove);
        computer2(item);
    }else{
        var message = "Choose a game mode first.";
        showModal(message);
    }
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
        if( playerOneMove === "rock" ){
            if(( playerTwoMove === "scissor") || (playerTwoMove === "lizard" )){
 
                document.getElementById("score-p1").appendChild(node);

                var message = "Player 1 Wins";
                showModal(message);
            }else{

                document.getElementById("score-p2").appendChild(node);

                var message = "Player 2 Wins";
                showModal(message);
            }
        }else if(playerOneMove === "paper"){
            if((playerTwoMove === "rock" ) || ( playerTwoMove === "spock" )){

                document.getElementById("score-p1").appendChild(node);
 
                var message = "Player 1 Wins";
                showModal(message);
            }else{
 
                document.getElementById("score-p2").appendChild(node);

                var message = "Player 2 Wins";
                showModal(message);
            }
        }else if(playerOneMove === "scissor"){
            
            if(( playerTwoMove === "paper" ) || ( playerTwoMove === "lizard" )){

                document.getElementById("score-p1").appendChild(node);
  
                var message = "Player 1 Wins";
                showModal(message);
            }else{

                document.getElementById("score-p2").appendChild(node);
 
                var message = "Player 2 Wins";
                showModal(message);
            }
        }else if( playerOneMove === "spock" ){
            
            if(( playerTwoMove === "scissor" ) || ( playerTwoMove === "rock")){

                document.getElementById("score-p1").appendChild(node);

                var message = "Player 1 Wins";
                showModal(message);
            }else{

                document.getElementById("score-p2").appendChild(node);

                var message = "Player 2 Wins";
                showModal(message);
            }
        }else if( playerOneMove === "lizard" ){
            
            if(( playerTwoMove === "spock" ) || ( playerTwoMove === "paper")){

                document.getElementById("score-p1").appendChild(node);

                var message = "Player 1 Wins";
                showModal(message);
            }else{

                document.getElementById("score-p2").appendChild(node);

                var message = "Player 2 Wins";
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
    gameMode = undefined;

    document.querySelector('.btn-success').style.display = 'none';

    document.querySelector('.p1').innerHTML = 'Score:';
    document.querySelector('.p2').innerHTML = 'Score:';

    var bgPlayer = document.querySelectorAll('.select-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.color = "black";
        bgPlayer[i].style.fontWeight = "normal";
    }

    var classSelected = document.getElementById('boxOne');
    classSelected.classList.remove( "select", "scissor","rock","paper", "spock", "lizard", "fadeIn" );
    classSelected.classList.add('select');

    var bgPlayer = document.querySelectorAll('.first-player');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.opacity = '0.8';
    }

    var classSelected = document.getElementById('boxTwo');
    classSelected.classList.remove( 'select', 'scissor', 'rock', 'paper', 'spock', 'lizard', "fadeIn" );
    classSelected.classList.add( 'select' );

    var bgPlayer = document.querySelectorAll( '.second-player' );

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
    var classOneSelected = document.getElementById('boxOne');
    classOneSelected.classList.remove("select", "scissor","rock","paper", "spock", "lizard", "fadeIn");
    classOneSelected.classList.add(playerOneMove);
    var randNumber = Math.floor((Math.random() * choices.length) + 0);
    playerTwoMove = choices[randNumber];
    var bgPlayer = document.querySelectorAll('.first-player');

    element.classList.remove('fadeIn');

    for(var i = 0; i < bgPlayer.length; i++)
    {
        bgPlayer[i].style.opacity = '0.8';
        bgPlayer[i].classList.remove('fadeIn');
    }
    element.style.opacity = '1';
    classOneSelected.style.opacity = '1';

    var classTwoSelected = document.getElementById('boxTwo');
    classTwoSelected.classList.remove( 'select', 'scissor', 'rock', 'paper', 'spock', 'lizard', "fadeIn" );
    classTwoSelected.classList.add(playerTwoMove);

    var hasClass = document.querySelectorAll('.second-player');
    var index;
    for(var i = 0; i < hasClass.length; i++)
    {
        hasClass[i].classList.remove('fadeIn');
        hasClass[i].style.opacity = '0.8';
        if(hasClass[i].classList.contains(playerTwoMove)){
            hasClass[i].style.opacity = '1';
            index = i;
        }
    }

    setTimeout(function(){
        update ();
        hasClass[index].classList.add('fadeIn');
        element.classList.add('fadeIn');
        classOneSelected.classList.add('fadeIn');
        classTwoSelected.classList.add('fadeIn');
    }, 500);
}
function gameTimer(element){
    document.querySelector(".timer").style.display = 'block'; 
    var counter = setInterval(function(){ myTimer() }, 1000);
    var count = 3;
    showModal('');
    function myTimer() {
               
        var d = new Date();
        var s = d.getSeconds();
        
        if(count < 1){
            stopTimer();
        }else{
            document.querySelector(".timer").innerHTML = count;
            count--;
        }
    }
    
    function stopTimer() {
        
        clearInterval(counter);
        
        document.querySelector(".timer").innerHTML = 'Go!';
        
        setTimeout(function(){
            closeModal();
            if(gameMode == 2){
                computer1();
                document.querySelector(".timer").innerHTML = '';
                document.querySelector(".timer").style.display = 'none';
            }else{
                computer2(element);
                document.querySelector(".timer").innerHTML = '';
                document.querySelector(".timer").style.display = 'none';
            }
        }, 1000);
    }
}
