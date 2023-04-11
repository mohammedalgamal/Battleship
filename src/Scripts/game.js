import Player from "./player";
import makeDOMBoard from "./DOM";

export default function startGame() {
    const player = new Player("player");
    const computer = new Player("computer");
    player.isMyTurn = true;
    
    player.populateBoard();
    computer.populateBoard();

    player.setOppBoard(computer.board);
    computer.setOppBoard(player.board);
    
    makeDOMBoard(player);
    makeDOMBoard(computer);
};
