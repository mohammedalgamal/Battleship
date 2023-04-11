/* eslint-disable no-param-reassign */
import Player from "./player";
import makeDOMBoard from "./DOM";

function endGame(winner, player, computer) {
    player.isMyTurn = false;
    computer.isMyTurn = false;
    console.log(winner);
};

function computerMove(player, computer) {
    if (computer.isMyTurn) {
        computer.makeRandomAttack();
        makeDOMBoard(player);
        if (player.board.getIsAllSunk()) endGame(computer, player, computer);
    };
};
 
function playerMove(player, computer) {
    const oppCells = document.querySelectorAll(".computerGrid .cell");
    for (let i = 0; i < oppCells.length; i++) {
        oppCells[i].addEventListener("click", () => {
            if (player.isMyTurn && oppCells[i].dataset.value <= 1) {
                computer.board.receiveAttack([Number(oppCells[i].dataset.row), 
                                                Number(oppCells[i].dataset.column)]);
                oppCells[i].dataset.value = computer.board.board[Number(oppCells[i].dataset.row)]
                                                                [Number(oppCells[i].dataset.column)];
                computerMove(player, computer);
                if (computer.board.getIsAllSunk()) endGame(player, player, computer);
            };
        });
    };
};


export default function startGame() {
    const player = new Player("player");
    const computer = new Player("computer");
    player.isMyTurn = true;
    computer.isMyTurn = true;
    
    player.populateBoard();
    computer.populateBoard();

    player.setOppBoard(computer.board);
    computer.setOppBoard(player.board);

    makeDOMBoard(player);
    makeDOMBoard(computer);
    
    playerMove(player, computer);
};
