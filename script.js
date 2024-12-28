document.addEventListener('DOMContentLoaded', function (){

    const gameArena = document.getElementById('game-arena');
    const arenaSize = 600;
    const cellSize = 20;
    let score = 0;  // score of the game
    let gameStarted = false; //game status
    let food = {x: 300, y: 200}; // {x: 15*20, y: 10*20} // cell coordinates --> top left pixels of food
    let snake = [{x: 160, y: 200}, {x: 140, y: 200}, {x: 120, y: 200}]; //[head, body, tail]

    function drawDiv(x, y, className){
        const divElement = document.createElement('div');
        divElement.classList.add(className);
        divElement.style.top = `${y}px`;
        divElement.style.left = `${x}px`;
        return divElement;
    }

    function drawFoodAndSnake(){
        //wipe out everything and redraw with new positions
        gameArena.innerHTML = '';  // clear the game arena

        snake.forEach((snakeCell) => {
            const snakeElement = drawDiv(snakeCell.x, snakeCell.y, 'snake');
            gameArena.appendChild(snakeElement);
        })

        const foodElement = drawDiv(food.x, food.y, 'food');
        gameArena.appendChild(foodElement);
    }

    function runGame(){
        if(!gameStarted){
            gameStarted = true;
            drawFoodAndSnake();
            //gameLoop(); // TODO: Implement game loop
        }
    }

    function initiateGame(){
        const scoreBoard = document.createElement('div');
        scoreBoard.id = 'score-board';

        document.body.insertBefore(scoreBoard, gameArena); //insert scoreBoard before game arena

        const startButton = document.createElement('button');
        startButton.textContent = 'Start Game';
        startButton.classList.add('start-button');

        startButton.addEventListener('click', function startGame(){
            startButton.style.display = 'none';  // Hide start button

            runGame();
        });

        document.body.appendChild(startButton); //Append start button to the body
    }

    initiateGame();
});