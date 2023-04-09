import GameBoard from "./gameBoard";

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
        this.oppBoard.receiveAttack(place);
    };
}