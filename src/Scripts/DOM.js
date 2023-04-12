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

export function reloadDOMBoard(player) {
    const gridCells = document.querySelectorAll(`.${player.type}Grid .cell`);

    gridCells.forEach(cell => {
        const cellPosition = [cell.dataset.column, cell.dataset.row];
        // eslint-disable-next-line no-param-reassign
        cell.dataset.value = player.board.board[cellPosition[1]][cellPosition[0]];
    });
}