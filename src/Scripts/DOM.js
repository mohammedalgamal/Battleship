export default function makeDOMBoard(player) {
    const grid = document.querySelector(`.${player.type}Grid`);

    grid.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            grid.innerHTML += `<div 
                                class="cell" 
                                data-column="${j}" 
                                data-row="${i}" 
                                data-value="${player.board.board[i][j]}"></div>`; 
        };
    };
};