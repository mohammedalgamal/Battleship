import GameBoard from "./gameBoard";
import { getAllPositions } from "./utils";

export default class Player {
    constructor(type, oppBoard = {}) {
        const board = new GameBoard;

        this.isMyTurn = false;
        this.board = board;
        this.oppBoard = oppBoard;
        this.isComputer = type === "computer"; 
    };

    setOppBoard(board) {
        this.oppBoard = board;
    };

    attack(place) {
        if (place === []) return; 
        this.oppBoard.receiveAttack(place);
    };

    makeRandomAttack() {
        const allPositions = getAllPositions();
        let randomPlace = allPositions.pop();

        while(this.oppBoard.board[randomPlace[0]][randomPlace[1]] > 1 && allPositions.length > 0) {
            randomPlace = allPositions.pop();
        };
        
        if (this.oppBoard.board[randomPlace[0]][randomPlace[1]] <= 1) {
            this.attack(randomPlace);
        };
    };
}