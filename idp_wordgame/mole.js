let currB2cTile;
let currB2iTile;
let currB3cTile;
let currB3iTile;
let currS1cTile;
let currS1iTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setB2c, 1000); // 1000 miliseconds = 1 second, every 1 second call setB2c
    setInterval(setB2i, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setB2i
    setInterval(setB3c, 1500); 
    setInterval(setB3i, 2500); 
    setInterval(setS1c, 2000);
    setInterval(setS1i, 3000);

    //add restart button
    let restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart";
    restartBtn.addEventListener("click", restartGame);
    document.getElementById("board").appendChild(restartBtn);
}

function restartGame() {
    //reset variables
    currB2cTile = null;
    currB2iTile = null;
    currB3cTile = null;
    currB3iTile = null;
    currS1cTile = null;
    currS1iTile = null;
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = "0";
    //remove all tiles
    let tiles = document.querySelectorAll("#board > div");
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].innerHTML = "";
    }
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setB2c() {
    if (gameOver) {
        return;
    }
    if (currB2cTile) {
        currB2cTile.innerHTML = "";
    }
    let B2c = document.createElement("img");
    B2c.src = "./B2c.png";

    let num;
    do {
        num = getRandomTile();
    } while (currB2iTile && currB2iTile.id == num || currS1cTile && currS1cTile.id == num || currS1iTile && currS1iTile.id == num || currB3cTile && currB3cTile.id == num || currB3iTile && currB3iTile.id == num);
    currB2cTile = document.getElementById(num);
    currB2cTile.appendChild(B2c);
}

function setB2i() {
    if (gameOver) {
        return;
    }
    if (currB2iTile) {
        currB2iTile.innerHTML = "";
    }
    let B2i = document.createElement("img");
    B2i.src = "./B2i.png";

    let num;
    do {
        num = getRandomTile();
    } while (currB2cTile && currB2cTile.id == num || currS1cTile && currS1cTile.id == num || currS1iTile && currS1iTile.id == num || currB3cTile && currB3cTile.id == num || currB3iTile && currB3iTile.id == num);
    currB2iTile = document.getElementById(num);
    currB2iTile.appendChild(B2i);
}

function setB3c() {
    if (gameOver) {
        return;
    }
    if (currB3cTile) {
        currB3cTile.innerHTML = "";
    }
    let B3c = document.createElement("img");
    B3c.src = "./B3c.png";

    let num;
    do {
        num = getRandomTile();
    } while (currB2cTile && currB2cTile.id == num || currB2iTile && currB2iTile.id == num || currS1cTile && currS1cTile.id == num || currS1iTile && currS1iTile.id == num || currB3iTile && currB3iTile.id == num);
    currB3cTile = document.getElementById(num);
    currB3cTile.appendChild(B3c);
}

function setB3i() {
    if (gameOver) {
        return;
    }
    if (currB3iTile) {
        currB3iTile.innerHTML = "";
    }
    let B3i = document.createElement("img");
    B3i.src = "./B3i.png";

    let num;
    do {
        num = getRandomTile();
    } while (currB2cTile && currB2cTile.id == num || currB2iTile && currB2iTile.id == num || currS1cTile && currS1cTile.id == num || currS1iTile && currS1iTile.id == num || currB3cTile && currB3cTile.id == num);
    currB3iTile = document.getElementById(num);
    currB3iTile.appendChild(B3i);
}

function setS1c() {
    if (gameOver) {
        return;
    }
    if (currS1cTile) {
        currS1cTile.innerHTML = "";
    }
    let S1c = document.createElement("img");
    S1c.src = "./S1c.png";

    let num;
    do {
        num = getRandomTile();
    } while (currB2cTile && currB2cTile.id == num || currB2iTile && currB2iTile.id == num || currS1iTile && currS1iTile.id == num || currB3cTile && currB3cTile.id == num || currB3iTile && currB3iTile.id == num);
    currS1cTile = document.getElementById(num);
    currS1cTile.appendChild(S1c);
}

function setS1i() {
    if (gameOver) {
        return;
    }
    if (currS1iTile) {
        currS1iTile.innerHTML = "";
    }
    let S1i = document.createElement("img");
    S1i.src = "./S1i.png";

    let num;
    do {
        num = getRandomTile();
    } while (currB2cTile && currB2cTile.id == num || currB2iTile && currB2iTile.id == num || currS1cTile && currS1cTile.id == num || currB3cTile && currB3cTile.id == num || currB3iTile && currB3iTile.id == num);
    currS1iTile = document.getElementById(num);
    currS1iTile.appendChild(S1i);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currB2iTile || this == currS1iTile || this == currB3iTile) {
        gameOver = true;
        alert("Game Over! Your score was " + score + ". Click the Restart button to play again.");
        return;
    }
    else {
        score += 10;
    }
    document.getElementById("score").innerText = score.toString();
}