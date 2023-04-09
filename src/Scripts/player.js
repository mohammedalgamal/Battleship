import GameBoard from "./gameBoard";

export default class Player {
    constructor() {
        const board = new GameBoard;

        this.isMyTurn = false;
        this.board = board;
        this.oppBoard = {};
    };
}