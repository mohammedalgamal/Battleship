/* eslint-disable no-undef */
import GameBoard from "../Scripts/gameBoard";

test("Creating gameBoard returns the correct coordinates", () => {
    const game = new GameBoard;
    expect(game.board).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test("Placing ships works correctly", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 0]);

    expect(game.board).toEqual([[1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test("Placing ships works correctly vertically", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 0], "vertical");

    expect(game.board).toEqual([[1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test("Placing ships does nothing when coordinates aren't right", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 7]);

    expect(game.board).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test("Placing ships prevent ships collapse", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 0]);
    game.placeShip(4, [0, 3], "vertical");

    expect(game.board).toEqual([[1, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test("Placing ships adds ships correctly to ships array", () => {
    const game = new GameBoard;
    game.placeShip(3, [0, 0]);

    expect(game.ships).toEqual([{ length: 3,
                                   hits: 0, 
                                   sunk: false, 
                                   coordinates: [[0, 0], [0, 1], [0, 2]] }]);
});

test("Calling receiveAttack changes the board accordingly", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 0]);
    game.placeShip(4, [0, 3], "vertical");
    game.receiveAttack([0, 0]);
    game.receiveAttack([9, 9]);

    expect(game.board).toEqual([[3, 1, 1, 1, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]]);
});

test("Calling receiveAttack changes number of hits for the specified ship", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 0]);
    game.placeShip(3, [0, 5], "vertical");
    game.placeShip(4, [0, 3], "vertical");
    game.receiveAttack([0, 0]);
    game.receiveAttack([9, 9]);
    game.receiveAttack([1, 5]);

    expect(game.board).toEqual([[3, 1, 1, 1, 0, 1, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 3, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]]);

    expect(game.ships[1].hits).toBe(1);
    expect(game.ships[0].hits).toBe(1); 
});

test("Destroying all ships changes isAllSunk", () => {
    const game = new GameBoard;
    game.placeShip(4, [0, 0]);
    game.receiveAttack([0, 0]);
    game.receiveAttack([9, 9]);
    game.receiveAttack([1, 5]);

    expect(game.getIsAllSunk()).toBe(false);

    game.receiveAttack([0, 1]);
    game.receiveAttack([0, 2]);
    game.receiveAttack([0, 3]);

    expect(game.getIsAllSunk()).toBe(true);
});