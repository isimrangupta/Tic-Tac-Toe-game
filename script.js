let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector('.new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector("#msg");



let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]


let turnO = true;

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (turnO) {
            box.innerHTML = 'O';
            box.style.color = "green"
            turnO = false;

        } else {
            box.innerHTML = 'X';
            box.style.color = "blue"
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = function () {
    for (const pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinner(pos1Value);
            }
        }
    }

};

const showWinner = function (winner) {
    msg.innerHTML = `Congratulation, ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}



const disableBoxes = function () {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const resetGame = function(){
    turnO = true;
    msgContainer.classList.add('hide');
    enableBoxes()
}

const enableBoxes = function(){
    for (const box of boxes) {
        box.innerHTML = ""
        box.disabled = false;
        
    }
}

resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);






