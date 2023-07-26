
let allBoxes = document.querySelectorAll(".box");
let allP = document.querySelectorAll("p");

let isOClicked = false;
let GiveO = false;

let winnerO = "";
let winnerX = "";

let eachBoxes = [];

const initializeGame = () => {
    for (let i = 0; i < allBoxes.length; i++)
        eachBoxes[i] = false;
}

initializeGame();

const displayWinner = function (winner) {
    document.querySelector(".displaywinner h5").innerHTML = "Player " + winner + " Win!";
}

const resetboard = function () {
    document.querySelector(".resetbtn").addEventListener("click", function () {
        winnerO = "";
        winnerX = "";
        document.querySelector(".displaywinner h5").innerHTML = "";
        for (let i = 0; i < allP.length; i++) {
            allP[i].innerHTML = "";
        }
    });
}

resetboard();

const checkWinner = function (allWinCon) {

    if (GiveO && winnerO.length == 3) {
        for (let i = 0; i < allWinCon.length; i++) {
            if (winnerO == allWinCon[i]) {
                displayWinner("O");
                return;
            }
        }
    }
    for (let i = 0; i < allWinCon.length; i++) {
        if (winnerX == allWinCon[i]) {
            displayWinner("X");
            return;

        }
    }
}


const checkWinCondition = function (i, winner) {
    let allWinCon = [
        "123", "456", "789",
        "147", "258", "369",
        "159", "357",
    ];

    if (!GiveO) {
        GiveO = true;
        winnerO += i;
        console.log("O is: " + winnerO);
        checkWinner(allWinCon);
    }
    else {
        GiveO = false;
        winnerX += i;
        console.log("X is: " + winnerX);
        checkWinner(allWinCon);
    }
}


const clicked = function () {
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener("click", () => {
            if (!isOClicked) {
                isOClicked = true;
                eachBoxes[i] = "O";
               
                allP[i].innerHTML = "O";
                checkWinCondition((i + 1).toString(), "O");
            } else {
                isOClicked = false;
                eachBoxes[i] = "X";
                
                allP[i].innerHTML = "X";
                checkWinCondition((i + 1).toString(), "X");
            }
        });
    }
}

clicked();
//document.getElementById("box").style.backgroundColor="red";














