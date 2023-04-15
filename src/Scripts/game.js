/* eslint-disable no-param-reassign */
import Player from "./player";
import makeDOMBoard, { reloadDOMBoard } from "./DOM";
import { capitalize, countOnes, countOnesAndThrees, getUsedPositions, isCollide, isValidShipPlacement } from "./utils";

function endGame(winner, player, computer) {
    const textArea = document.querySelector(".text");
    player.isMyTurn = false;
    computer.isMyTurn = false;
    textArea.innerHTML = winner.type === "computer" ? "Computer Wins!" : "You Win!";
};

function computerMove(player, computer) {
    if (computer.isMyTurn) {
        computer.makeRandomAttack();
        reloadDOMBoard(player);
        if (player.board.getIsAllSunk()) endGame(computer, player, computer);
    };
};

function removeHoverClass() {
    const playerCells = document.querySelectorAll(".playerGrid .cell");

    playerCells.forEach(cell => {
        cell.classList.remove("hover");
    });
};

function playerMove(player, computer) {
    const oppCells = document.querySelectorAll(".computerGrid .cell");
    for (let i = 0; i < oppCells.length; i++) {
        oppCells[i].addEventListener("mouseover", () => {
            if (countOnesAndThrees(player.board.board) === 17) {
                oppCells[i].classList.add("hover");
            };
        });

        oppCells[i].addEventListener("touchstart", () => {
            if (countOnesAndThrees(player.board.board) === 17) {
                oppCells[i].classList.add("hover");
            };
        });

        oppCells[i].addEventListener("mouseout", () => {
            if (countOnesAndThrees(player.board.board) === 17) {
                oppCells[i].classList.remove("hover");
            };
        });

        oppCells[i].addEventListener("touchend", () => {
            if (countOnesAndThrees(player.board.board) === 17) {
                oppCells[i].classList.remove("hover");
            };
        });

        oppCells[i].addEventListener("click", () => {
            if (player.isMyTurn && oppCells[i].dataset.value <= 1 &&
                countOnesAndThrees(player.board.board) === 17) {
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

function rotateButtonHandler(e) {
    const rotateButton = e.target;
    rotateButton.dataset.value = rotateButton.dataset.value === "horizontal" ?
    "vertical": "horizontal";
    rotateButton.innerHTML = `${capitalize(rotateButton.dataset.value)}<br>Rotate`;
}

function placeShips(player) {
    const unplacedShipsLengths = [5, 4, 3, 3, 2];
    const playerCells = document.querySelectorAll(".playerGrid .cell");
    const rotateButton = document.querySelector(".rotate");
    const textArea = document.querySelector(".text");
    const shipNames = ["Carrier", "Battleship", "Destroyer", "Submarine", "Patrol Boat"];
    let usedPositions = [];
    let pointer = 0;

    playerCells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            if (countOnes(player.board.board) === 17) removeHoverClass();
            const direction = rotateButton.dataset.value;
            const cellPosition = [Number(cell.dataset.row), Number(cell.dataset.column)];
            const isValid =  isValidShipPlacement(unplacedShipsLengths[pointer], cellPosition,
                    direction, player.board.board) && 
                    !isCollide(unplacedShipsLengths[pointer], cellPosition, direction, usedPositions);
            
            if (pointer <= 4 && isValid) {
                cell.classList.add("hover");
                for (let i = 1; i < unplacedShipsLengths[pointer]; i++) {
                    const newPosition = direction === "horizontal" ? 
                                                    [cellPosition[0], Number(cellPosition[1]) + i]:
                                                    [Number(cellPosition[0]) + i, cellPosition[1]];
    
                    const newCell = document.querySelector(`.cell[data-row="${newPosition[0]}"][data-column="${newPosition[1]}"]`);
                    newCell.classList.add("hover");
                };
            };
        });

        cell.addEventListener("touchstart", () => {
            if (countOnes(player.board.board) === 17) removeHoverClass();
            const direction = rotateButton.dataset.value;
            const cellPosition = [Number(cell.dataset.row), Number(cell.dataset.column)];
            const isValid =  isValidShipPlacement(unplacedShipsLengths[pointer], cellPosition,
                    direction, player.board.board) && 
                    !isCollide(unplacedShipsLengths[pointer], cellPosition, direction, usedPositions);
            
            if (pointer <= 4 && isValid) {
                cell.classList.add("hover");
                for (let i = 1; i < unplacedShipsLengths[pointer]; i++) {
                    const newPosition = direction === "horizontal" ? 
                                                    [cellPosition[0], Number(cellPosition[1]) + i]:
                                                    [Number(cellPosition[0]) + i, cellPosition[1]];
    
                    const newCell = document.querySelector(`.cell[data-row="${newPosition[0]}"][data-column="${newPosition[1]}"]`);
                    newCell.classList.add("hover");
                };
            };
        });

        cell.addEventListener("mouseout", () => {
            const direction = rotateButton.dataset.value;
            const cellPosition = [Number(cell.dataset.row), Number(cell.dataset.column)];
            const isValid =  isValidShipPlacement(unplacedShipsLengths[pointer], cellPosition,
                direction, player.board.board) && 
                !isCollide(unplacedShipsLengths[pointer], cellPosition, direction, usedPositions);

            if (pointer <= 4 && isValid) {         
                cell.classList.remove("hover");
                for (let i = 1; i < unplacedShipsLengths[pointer]; i++) {
                    const newPosition = direction === "horizontal" ? 
                                                    [cellPosition[0], Number(cellPosition[1]) + i]:
                                                    [Number(cellPosition[0]) + i, cellPosition[1]];

                    const newCell = document.querySelector(`.cell[data-row="${newPosition[0]}"][data-column="${newPosition[1]}"]`);
                    newCell.classList.remove("hover");
                };
            };
        });

        cell.addEventListener("touchend", () => {
            const direction = rotateButton.dataset.value;
            const cellPosition = [Number(cell.dataset.row), Number(cell.dataset.column)];
            const isValid =  isValidShipPlacement(unplacedShipsLengths[pointer], cellPosition,
                direction, player.board.board) && 
                !isCollide(unplacedShipsLengths[pointer], cellPosition, direction, usedPositions);

            if (pointer <= 4 && isValid) {         
                cell.classList.remove("hover");
                for (let i = 1; i < unplacedShipsLengths[pointer]; i++) {
                    const newPosition = direction === "horizontal" ? 
                                                    [cellPosition[0], Number(cellPosition[1]) + i]:
                                                    [Number(cellPosition[0]) + i, cellPosition[1]];

                    const newCell = document.querySelector(`.cell[data-row="${newPosition[0]}"][data-column="${newPosition[1]}"]`);
                    newCell.classList.remove("hover");
                };
            };
        });

        cell.addEventListener("click", () => {
            const length = unplacedShipsLengths[pointer];
            const startPosition = [Number(cell.dataset.row), Number(cell.dataset.column)];
            const direction = rotateButton.dataset.value;
            if (pointer <= 4 && 
                !isCollide(length, startPosition, direction, usedPositions)) {
                
                const onesBefore = countOnes(player.board.board);
                player.board.placeShip(length, startPosition, direction);
                const onesAfter = countOnes(player.board.board);

                if (onesAfter > onesBefore) {
                    pointer++;
                    usedPositions = usedPositions.concat(getUsedPositions(length, startPosition, direction));
                    textArea.innerHTML = pointer <= 4 ? `Place your ${shipNames[pointer]}` : "Battle!";
                    reloadDOMBoard(player);

                    if (countOnesAndThrees(player.board.board) === 17) rotateButton.disabled = true;
                };
            };
        });
    });

};

export default function startGame() {
    const textArea = document.querySelector(".text");
    const rotateButton = document.querySelector(".rotate");
    const player = new Player("player");
    const computer = new Player("computer");
    player.isMyTurn = true;
    computer.isMyTurn = true;

    textArea.innerHTML = "Place your Carrier";
    rotateButton.disabled = false;
    rotateButton.dataset.value = "horizontal";
    rotateButton.innerHTML = `${capitalize(rotateButton.dataset.value)}<br>Rotate`;
    // rotateButton.removeEventListener("click", rotateButtonHandler(rotateButton));
    rotateButton.addEventListener("click", rotateButtonHandler);

    computer.populateBoard();

    player.setOppBoard(computer.board);
    computer.setOppBoard(player.board);

    makeDOMBoard(player);
    makeDOMBoard(computer);

    placeShips(player);

    playerMove(player, computer);
};
