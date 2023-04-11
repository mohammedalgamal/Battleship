/* eslint-disable no-undef */
import Player from "../Scripts/player";
import GameBoard from "../Scripts/gameBoard";
import { countOnes } from "../Scripts/utils";

test("Making a player returns the correct object", () => {
    const mockPlayer = new Player("human");
    const mockBoard = new GameBoard;

    expect(mockPlayer.isMyTurn).toBe(false);
    expect(mockPlayer.board).toEqual(mockBoard);
    expect(mockPlayer.oppBoard).toEqual({});
    expect(mockPlayer.isComputer).toBe(false);
});

test("attack method works correctly", () => {
    const mockBoard = new GameBoard;
    const mockOppBoard = new GameBoard;
    const mockPlayer = new Player("human", mockOppBoard);
    const mockOppPlayer = new Player("computer", mockBoard);

    mockPlayer.attack([0, 0]);
    mockOppPlayer.attack([1, 1]);

    expect(mockBoard.board).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 2, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

    expect(mockOppBoard.board).toEqual([[2, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
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

test("Making random attacks works correctly", () => {
    const mockBoard = new GameBoard;
    mockBoard.board = [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 1, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];
    const mockPlayer = new Player("computer", mockBoard);

    mockPlayer.makeRandomAttack();

    expect(mockBoard.board).toEqual([[2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 3, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
                                    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]]);
});

test("populateBoard fills the board", () => {
    const mockPlayer = new Player("player");
    mockPlayer.populateBoard();

    expect(countOnes(mockPlayer.board.board)).toBe(17);
});