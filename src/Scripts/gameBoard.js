import Ship from "./ship";
import makeBoard, { isValidShipPlacement } from "./utils";

// import Ship from "./ship";
export default class GameBoard {
    constructor() {
        // In game board 0 = empty cell
        //               1 = cell that has a part of a ship
        //               2 = empty cell that has been hit
        //               3 = cell that has a part of a ship with a hit

        this.board = makeBoard();
        this.ships = [];
    };

    placeShip(length, startPosition, direction = "horizontal") {
        if (!isValidShipPlacement(length, startPosition, direction, this.board)) return; 
        
        const move = direction === "horizontal" ? [0, 1] : [1, 0];
        const ship = new Ship(length);
        let positionPointer = startPosition;

        for (let i = 0; i < length; i++) {
            ship.addPlaceToCoordinates(positionPointer);
            this.board[positionPointer[0]][positionPointer[1]] = 1;
            positionPointer = [positionPointer[0] + move[0], positionPointer[1] + move[1]];
        };

        this.ships.push(ship);
    };
};