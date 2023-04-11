import GameBoard from "./gameBoard";
import { countOnes, getAllPositions, getRandomInt, getUsedPositions, isCollide, shuffleArray } from "./utils";

export default class Player {
    constructor(type, oppBoard = {}) {
        const board = new GameBoard;

        this.isMyTurn = false;
        this.board = board;
        this.oppBoard = oppBoard;
        this.type = type;
        this.isComputer = type === "computer"; 
    };

    populateBoard() {
        const shipsLengths = [5, 4, 3, 3, 2];
        let index = 0;
        let currentShip = shipsLengths[index];
        let usedPositions = [];

        while (countOnes(this.board.board) < 17) {
            const beforeCount = countOnes(this.board.board);
            const position = [getRandomInt(0, 9), getRandomInt(0, 9)];
            const direction = getRandomInt(0, 1) === 1 ? "horizontal": "vertical";

            if (!isCollide(currentShip, position, direction, usedPositions)) {
                this.board.placeShip(currentShip, position, direction);
                const afterCount = countOnes(this.board.board);
                if (afterCount > beforeCount) {
                    usedPositions =  usedPositions.concat(getUsedPositions(currentShip, position, direction));            
                    index++;
                    currentShip = shipsLengths[index];
                };
            };
        };
    }

    setOppBoard(board) {
        this.oppBoard = board;
    };

    attack(place) {
        if (place === []) return; 
        this.oppBoard.receiveAttack(place);
    };

    makeRandomAttack() {
        const allPositions = getAllPositions();
        shuffleArray(allPositions);
        let randomPlace = allPositions.pop();

        while(this.oppBoard.board[randomPlace[0]][randomPlace[1]] > 1 && allPositions.length > 0) {
            randomPlace = allPositions.pop();
        };
        
        if (this.oppBoard.board[randomPlace[0]][randomPlace[1]] <= 1) {
            this.attack(randomPlace);
        };
    };
}